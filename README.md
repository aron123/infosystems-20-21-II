# HTTP protokoll

A HTTP _(**H**yper**T**ext **T**ransfer **P**rotocol)_ egy TCP feletti, alkalmazási rétegbeli protokoll. Eredetileg HTML fájlok kiszolgálásához készítették, azonban ma már ennél lényegesen több funkcióval rendelkezik.

## Működése

Kliens és szerver közötti adatcserét valósít meg. A kliens a szervernek **kérés**eket küld, a szerver a kliensnek **válasz**okat ad. A szerver "önállóan" nem tud adatot eljuttatni a kliensnek, csak a kliens kéréseire tud válaszolni.

### Kérés
A kliens a szerver erőforrásait a célnak megfelelő HTTP-metódus megadásával, illetve egy elérési útvonal megnevezésével éri el (pl. GET /api/users, GET /api/users/15, DELETE /api/users/15).

Egy példa kérés felépítése a következő:

```http
GET /template/web/img/logo-uni-miskolc.png HTTP/1.1
User-Agent: curl/7.35.0
Host: www.uni-miskolc.hu
Accept: */*
```

A kérés első sora mindig `METÓDUS ERŐFORRÁS VERZIÓ` formátumú. Ezt a kéréshez tartozó, tetszőleges számú **header** követi, `Headernév: érték` alakban.

A header sorok végét egy üres sor jelzi. Ezt követi az opcionális **body** rész, melyben a kérés teljesítéséhez szükséges adatokat helyezhetünk el plain text-ben vagy akár valamilyen tetszőleges adatformátumban (pl. egy új felhasználó adatait JSON formátumban).

#### Metódusok
A leggyakrabban alkalmazott metódusok és szimbolikus jelentésük:

- GET: Adatok lekérdezése
- POST: Új adat hozzáadása
- PUT: Meglévő adat módosítása
- DELETE: Meglévő adat törlése

#### GET kérés paraméterei
A GET kérés speciális abból a szempontból, hogy **body** részt nem tartalmazhat. Helyette - amennyiben szükséges - a kéréshez tartozó paramétereket **query paraméter**ekként adhatjuk meg.

Példa: `/template/web/img/logo-uni-miskolc.png?time=2020-05-01&thumb=true`

A paraméterek `név=érték` formában adhatóak meg. A paramétereket egymástól `&` jel, az erőforrás megnevezésétől `?` választja el.

#### Egyéb kérések paraméterei
POST, PUT, DELETE kéréseknél a **body** rész is kitölthető, azonban ez opcionális. A következő kérés egy felhasználó létrehozására szolgálhat.

```http
POST /users HTTP/1.1
User-Agent: curl/7.35.0
Host: api.example.com
Accept: */*
Content-Type: application/json
Content-Length: 28

{ "id": 15, "name": "feri" }
```

### Válasz

A kliens kéréseire a szerver válaszokat ad. Egy kéréshez legfeljebb egy teljesértékű válasz tartozhat.

A HTTP válasz a következőképpen épül fel:

```http
HTTP/1.1 200 OK
Date: Thu, 18 Mar 2021 13:02:06 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 29
Connection: keep-alive
X-Powered-By: Express
X-Ratelimit-Limit: 1000
X-Ratelimit-Remaining: 999
X-Ratelimit-Reset: 1616072536
Cache-Control: no-cache
Pragma: no-cache

{ "id": 101, "name": "feri" }
```

Az első sor `VERZIÓ STÁTUSZKÓD ÜZENET` formátumú, amely jelzi, hogy a kért művelet sikeresen befejeződött-e. A státuszkód gépi, az üzenet emberi feldolgozásra szolgál.<br>
A további sorok a válaszhoz tartozó header-ök, majd ezután egy üres sor következik.

Válasz esetében a body rész szintén opcionális. A példa kérésben a szerver visszaküldte az adatbázishoz hozzáadott felhasználó adatait.

#### HTTP státuszkódok
Az egyes HTTP státuszkódok jelentését a HTTP specifikációja tartalmazza, általánosságban a következők írhatóak le róluk:

- 1xx: Informatív üzenet (pl. 101 Switching Protocols)
- 2xx: A kérést a szerver sikeresen megkapta, értelmezte, teljesítette (pl. 200 OK, 201 Created)
- 3xx: Átirányítás (pl. 301 Moved Permanently)
- 4xx: Kliens hiba (pl. 400 Bad Request, 404 Not found)
- 5xx: Szerver hiba (pl. 503 Service Unavailable)

_([Az összes státuszkód definíciója](https://tools.ietf.org/html/rfc2616#section-10))_
