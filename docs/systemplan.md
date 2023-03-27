# Rendszerterv

## 1. A rendszer célja
A rendszer célja egy webshop létrehozása, ahol az ügyfél bizonyos kategóriák
alapján tud termékekre keresni, szűrni, és tud rendelést leadni.

## 2. Üzleti folyamatok modellje
Lásd: BusinessFlow.drawio

## 3. Követelmények
- Köszöntő oldal / Homepage
- Termékek lekérdezése adatbázisból és betöltése a termékek oldalra
- Reaktív és újrafelhasználható komponensek létrehozása
- CRUD műveletek implementálása admin oldalon

## 4. Funkcionális terv
A rendszer szerplői:
- Vásárló
- Admin

### Rendszerhasználati esetek:
 - Admin:
   - Bejelentkezhet az oldal admin felületére.
   - CRUD műveletek segítségével manupulálhatja a terméklistát, ezáltal az adatbázist.
 - Vásárló:
   - Regisztrálhat és bejelentkhezhet a weboldalra.
   - Kereshet a terméklistában.
   - Rendelést adhat le termékekre.

## 5. Fizikai környezet
- Felhasznált és alkalmazott technológiák:
  - Frontend oldalon:
    - React
    - TailwindCSS
  - Backend oldalon:
    - Express.js (Node.js)
    - MongoDB
- Fejlesztői környezet:
  - Visual Studio Code
  - PhpStorm / IntelliJ

## 6. Architekturális terv
Az alkalmazás egy szervergépen fog futni, melyre a felasználó böngészővel csatlakozik.

- Specifikáció:
  - Szükséges egy megfelelő minőségű és sebességű internetkapcsolat, illetve egy böngésző (microsoft Edge, firefox, chrome, stb..)

## 7. Adatbázis terv
Lásd: DatabasePlan.drawio

## 8. Implementációs terv
Az alkalmazás egy szervergépen fog futni, melyre a felasználó böngészővel csatlakozik.
Ez a szervergép feltehetőleg localhost lesz.

## 9. Tesztterv
A minimum hardverkonfiguráció: Intel Celeron processzor, 4GB RAM, 128GB HDD, a képernyők felbontása 1280x1024 vagy 1920x1080 legalább 10Mbit/s letöltési sebességgel rendelkező internetkapcsolat.

A tesztelés során a szoftver megfelelő működését vizsgáljuk. Amennyiben az elvártnak megfelelő eredményt kapunk, a teszt eset sikeresnek tekinthető, ellenkező esetben a hibát rögzítjük a teszt jegyzőkönyvben. Ezt követően a megtalált hibákat javítjuk a szoftverben, és újbóli tesztelésnek vetjük alá a rendszert.

## 10. Telepítési terv
- Fizikai telepítési terv:
  - Szükség van a megfelelő specifikációs számítógépre.
- Szoftver telepítési terv:
  - Szükség van megfelelő internetkapcsolatra.

## 11. Karbantartási terv
Karbantartásra a későbbiekben az ügyfél részéről lehet igény.
Például új funkciók létrehozása és bekötése ezért a kód írásnál
az OOP és SOLID elveket szükséges követni a jövőben módosítások
elősegítése érdekében.