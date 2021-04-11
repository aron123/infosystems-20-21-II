# Informatikai rendszerek építése 2020/21 II. félév

## Beadandó
- [Követelmények](https://github.com/aron123/infosystems-20-21-II/tree/week08/midterm-assignment)
- [Üres projekt](https://github.com/aron123/infosystems-20-21-II/tree/week10/starter-project)

## 1. hét
Szoftveres követelmények ismertetése, telepítése.

- [Szoftverkövetelmények](https://github.com/aron123/infosystems-20-21-II/tree/week01/requirements)

## 2. hét
Node Package Manager (npm) használata, Bootstrap telepítése, grid rendszer használata, sztring interpoláció, strukturális direktívák (`*ngIf`, `*ngFor`).

- Forráskódok:
  - [Egy komponens programozása](https://github.com/aron123/infosystems-20-21-II/tree/week02/intro) 

- Egyéb anyagok:
  - [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
  - [Emmet abbreviation](https://docs.emmet.io/abbreviations/syntax/)
  - [Emmet in Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet)

## 3. hét
TypeScript típusosságának használata, komponensek létrehozása (`ng generate` parancs), komponensek közötti együttműködés (`@Input`, `@Output` dekorátorok, `EventEmitter` osztály használata).

- Forráskódok:
  - [Szavazás](https://github.com/aron123/infosystems-20-21-II/tree/week03/votes)
  - [Szemantikus verziókezelés](https://github.com/aron123/infosystems-20-21-II/tree/week03/semantic-versioning)
  - [Termék adatbázis](https://github.com/aron123/infosystems-20-21-II/tree/week03/products-json)
  - [Webáruház](https://github.com/aron123/infosystems-20-21-II/tree/week03/webshop)

- Egyéb anyagok:
  - [Angular Components Overview](https://angular.io/guide/component-overview)
  - [Component interaction](https://angular.io/guide/component-interaction)
  - [Sharing data between child and parent components](https://angular.io/guide/inputs-outputs)

## 4. hét
`HttpClientModule` használata, service-k célja, létrehozása (`ng generate service` parancs), aszinkron függvények, HTTP kommunikáció. Angular komponensek életciklusa.

- Forráskódok:
  - [Webáruház](https://github.com/aron123/infosystems-20-21-II/tree/week03/webshop): JSON fájl betöltése

- Egyéb anyagok:
  - [Angular Lifecycle Hooks](https://codecraft.tv/courses/angular/components/lifecycle-hooks/)
  - [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## 5. hét
Formok építése `FormsModule` és `ReactiveFormsModule` használatával.

- Forráskódok:
  - [Webáruház](https://github.com/aron123/infosystems-20-21-II/tree/week03/webshop): terméklista megjelenítése, kereső létrehozása, új termék felvitele

- Egyéb anyagok:
  - [Reactive Forms](https://angular.io/guide/reactive-forms)

## 6. hét
Elmaradt (március 15.)

## 7. hét
Reaktív formok validálása. Az Angular Router célja és konfigurálása. A HTTP protokoll. `Express.js` szerver bevezetése.

- Forráskódok, tananyagok:
  - [Webáruház](https://github.com/aron123/infosystems-20-21-II/tree/week03/webshop): menürendszer kialakítása, termékfelviteli űrlap validációja, kezdetleges szerver hozzáadása
  - [HTTP-protokoll](https://github.com/aron123/infosystems-20-21-II/tree/week07/http)
  - [Backend bevezetés](https://github.com/aron123/infosystems-20-21-II/tree/week07/backend-basics)

- Egyéb anyagok:
  - [Routing in SPAs](https://dev.to/marcomonsanto/routing-in-spas-173i)
  - [In-app navigation: routing to views](https://angular.io/guide/router)

## 8. hét
Az ORM technika. Mintapéldák a `TypeORM` eszköz használatára (entitások, relációk, migrációk).

- Forráskódok, tananyagok:
  - [TypeORM gyakorlat](http://ait2.iit.uni-miskolc.hu/oktatas/doku.php?id=tanszek:oktatas:informatikai_rendszerek_epitese:type_orm) (Dr. Nehéz Károly anyaga)
  - [Webáruház](https://github.com/aron123/infosystems-20-21-II/tree/week03/webshop): backend projekt struktúrájának kialakítása, TypeORM konfigurációja, adatbázist kezelő controllerek implementálása

- Egyéb anyagok:
  - [TypeORM documentation](https://typeorm.io/)

## 9. hét
Elmaradt (húsvéthétfő)

## 10. hét
Kliens és szerver összekötése. TypeORM relációk (1:N, N:M) gyakorlása.

- Forráskódok, tananyagok:
  - [Termék adatbázis](https://github.com/aron123/infosystems-20-21-II/tree/week03/products-json) (SQL dump)
  - [Aszinkron végrehajtás](https://github.com/aron123/infosystems-20-21-II/tree/week10/promises)
  - [Webáruház](https://github.com/aron123/infosystems-20-21-II/tree/week03/webshop): Kliens-szerver kommunikáció, felhasználó <-> termék összerendelés (1:N reláció), termék <-> kategória összerendelés (N:M reláció)

- Egyéb anyagok:
  - [Angular - Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server)
  - [TypeORM relations](https://typeorm.io/#/relations)
