# Követelmény specifikáció
## 1. Áttekintés
A rendszer célja egy webshop létrehozása, ahol az ügyfelek és vásárlók bizonyos kategóriák alapján tudnak termékekre keresni, szűrni, és rendeléseket leadni.

## 2. Jelenlegi helyzet
Az ügyfél egy webshopot igényel amelyben az ügyefelek és a vásárlók rendeléseket tudnak leadni a webshopban található termékekre. 
Ezzel az ügyfél célja a reklámozás, termékek eladása, és lehetséges ügyfélállomány bővítése.
 
## 3. Vágyálom rendszer
Opcióként online bankkártyás fizetési lehetőség beépítése a webshopba.

## 4. Követelmények
1. A webshop létrehozása és elkészítése:
- Köszöntő oldal/ Homepage létrehozása
- Termékek oldal: ezen az oldalon jelennek meg a megvásárolható termékek       
- Regisztrációs és bejelentkezési oldal: az ügyfelek ezeken az oldalakon tudnak regisztrálni és bejelentkezni a webshopba.
- CRUD műveletek implementálása
- Termékek keresése, szűrése, és megrendelése funkciók: az vásárlók keresni és szűrni tudnak a termékekben bizonyos kategóriák és feltételek alapján, illetve a termék megrendelése gombra kattintva a vásárlók meg tudják rendelni az adott terméket.
- Kosár tartalma felület elkészítése, ahol a vásárlók kilistázva látják a megrendelni kívánt termékeket
- A megrendelést követően egy sikeres megrendelés visszaigazoló üzenet megjelenítése a vásárlóknak és az ügyfeleknek.

2. A termékeket és a termékekhez tartozó adatokat adatbázisban tároljuk, és adatbázis lekérdezések segítségével megjelenítjük és betöltjük az adatokat a termékek oldalra.

## 5. Rendszerre vonatkozó törvények, szabványok, ajánlások
- Egyedi fejlesztés
- Értékesítése nem megengedett.

## 6. Jelenlegi üzleti folyamatok modellje
Léteznek ilyen platformok a hazai piacon, viszont a webshop kifejezetten egy bizonyos ügyfélnek készül,
ezért a megrendelés egyedi fejlesztést igényel.

## 7. Igényelt üzleti folyamatok modellje
1. Adatbázis réteg
2. Online megjelenés
3. Nyitó/ üdvözlő oldal  létrehozása
4. Regisztrációs és bejelentkező oldal létrehozása
5. Terméklista oldal létrehozása és a termékek megjelenítése
6. Kosár oldal létrehozása és a megrendelt termékek kilistázása
7. Termék megrendelés leadása funkció létrehozása
8. Sikeres megrendelést visszaigazoló üzenet megjelenítése

