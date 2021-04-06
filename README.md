# Aszinkron végrehajtás Promise-okkal

„Szinkronnak nevezzük az olyan utasításokat, amelyek arra késztetik a számítógépet, hogy ameddig az egyik utasítás le nem fut, addig más utasítások ne tudjanak lefutni (feltartva a még nem végrehajtott utasítások végrehajtását).

Aszinkronnak nevezzük az olyan utasításokat, amelyek arra késztetik a számítógépet, hogy ameddig az aszinkron utasítás le nem fut, addig más utasításokat is tudjon futtatni párhuzamosan. Párhuzamos programozás esetén időigényes utasítássorozat futtatása esetén nem kell szükségszerűen egyszerre egy utasítást futtatni, feltéve ha adottak a megfelelő körülmények.” [[1]](http://www.inf.u-szeged.hu/~tarib/javascript/aszinkron.html#callback-fuggveny-promise-objektum-aszinkron-javascript-parhuzamos-programozas)

Az aszinkron végrehajtás megvalósítása JavaScriptben többféleképpen történhet. Régen callback függvényeket alkalmaztak erre a célra, 2012-es megjelenésétől kezdve azonban a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objektum használata a jellemző.

## Promise objektum

A Promise objektum egy művelet végrehajtásának az ígéretét szimbolizálja. A művelet eredményét a létrehozás pillanatában még nem ismerjük.

Egy Promise objektumnak 3 állapota lehet:

* `pending`: Kezdeti állapot, a művelet végrehajtása folyamatban van.
* `fulfilled`: A művelet sikeresen végre lett hajtva.
* `rejected`: A művelet végrehajtása során hiba keletkezett.

A Promise használata a következőképpen néz ki:

``` js
function doTheHeavyWork(delayMs, ok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => ok ? resolve('OK') : reject('ERROR'), delayMs);
  });
}

doTheHeavyWork(2000, true)
  .then(value => console.log('1:', value));

doTheHeavyWork(2000, false)
  .then(value => console.log('2:', value))
  .catch(err => console.error('Error: ', err));
```

A `doTheHeavyWork` függvény paraméterként megkapja azt az időt, ameddig dolgoznia kell, illetve azt, hogy sikerrel vagy hibával kell-e visszatérnie. A függvény visszatérési értéke egy Promise objektum.

A sikeres végrehajtás során előállított értéket a Promise `.then()` metódusával, a keletkezett hibát a `.catch()` metódussal lehet kezelni. Ezeknek a metódusoknak a paramétere egy-egy kezelő függvény, ami siker vagy hiba esetén lefut.

A Promise objektumok aszinkron működését a következő kód szemlélteti:

``` js
doTheHeavyWork(2000, true).then(value => console.log(value));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

/*
 * Output:
 * 1
 * 2
 * 3
 * 4
 * 5
 * OK
 */
```

A Promise objektum létrehozása után a kód további sorai kezdenek el futni (kiírásra kerülnek a számok 1-től 5-ig), majd amikor 2 mp elteltével az időigényesebb művelet végrehajtása befejeződik, kiírásra kerül annak az eredménye is.

## async / await kulcsszavak

2017-től a JavaScript a Promise-ok kezeléséhez a `.then()` és `.catch()` metódusokon kívül szintaktikai támogatást is biztosít: az `async` , `await` kulcsszavakat.

``` js
async function doWork() {
  try {
    const value = await doTheHeavyWork(2000, true);
    console.log(value);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  } catch (err) {
    console.error('Error happened:', err);
  }
}

doWork();

/*
 * Output:
 * OK
 * 1
 * 2
 * 3
 * 4
 * 5
 */
```

`await` kulcsszó használatakor a programkód további sorai nem futhatnak addig, ameddig az `await` kulcsszó mögött álló Promise sikerre nem futott. Az `await` kulcsszót alkalmazó függvényeket `async` módosítóval kell ellátni.

Az `await doTheHeavyWork(2000, true)` kifejezés egy try-catch blokkban van elhelyezve. Amennyiben hiba történik, a catch ág kerül futtatásra, a Promise által visszaküldött hibával, ahogy az a következő példában is látható:

``` js
async function doWork2() {
  try {
    const value = await doTheHeavyWork(2000, false);
    console.log(value);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  } catch (err) {
    console.error('Error happened:', err);
  }
}

doWork2();

/*
 * Output:
 * Error happened: ERROR
 */
```
