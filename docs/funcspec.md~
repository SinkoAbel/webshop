# Funkcionális specifikáció
## 1. Áttekintés
A rendszer célja egy interaktív kiállítási játék létrehozása, amelyben a kiállítási standhoz érkező
érdeklődők játékos módon ismerhetik meg a megrendelő céget.

## 2. Jelenlegi helyzet
Az ügyfél szeretne egy interaktív kvízjátékot amelyel a kiállításra látogatók játszhatnak,
így megismerve az ügyfél cégét.

## 3. Jelenlegi üzleti folyamatok modellje
Jelenleg léteznek ilyen platformok a hazai piacon, 
ám mivel kifejezetten cégeknek dedikált a termék,
ezért minden megrendelés egyedi fejlesztést igényel.

## 4. Igényelt üzleti folyamatok modellje
1. Konfigurációs réteg
2. Online megjelenés
3. Nyitó oldal  létrehozása
4. Játékválasztó oldal megvalósítása
5. Kvízjáték létrehozása
6. Kvízjáték összegzőoldal létrehozása

## 5. Követelmények
1. Az adatokat config fájlok tartalmazzák
2. Egy kvízjáték létrehozása, kérdéssekkel, több válaszadási lehetőséggel

## 6. Használati esetek
Felhasználó tudjon a programmal interakcióba lépni.
Ki tudja választani a kvízjáték menüpontot, majd az itt feltett kérdésekre egy meghatározott időn
belül kattintással válaszolni.


## 7. Képernyőterv
A tervek megtalálhatóak a DesignTervRft file-ban.

## 8. Forgatókönyv
A felhasználó az oldal megnyitása után az üdvözlőképernyőre kerül.
Ennek elég egyszer szerepelnie: az oldal megnyitásakor.
Ezután a felhasználónak lehetősége van kiválasztani a kvízjáték opciót.
A kvízjátékban a képernyő bal oldalán megjelenik egy kártya, melynek tartalma:
* kérdés sorszáma (pl. 1/5)
* a kérdés
* 3db válaszlehetőség

A képernyő jobb oldalon pedig egy, a kérdéshez tartozó releváns kép szerepeljen.

Helyes válasz esetén erősítsük meg a felhasználót a válasza helyességében és írjunk ki egy kis többlet információt a helyes válaszról.

Helytelen válasz esetén értesítsük a felhasználót, hogy a válasza nem megfelelő és írjunk ki egy kis többlet információt a helyes válaszról.

Amennyiben lejár az adott kérdésre megadott válaszidő úgy tudassuk ezt a felhasználóval és írjunk ki többlet információt a helyes válaszról.

A kvíz játék végén pedig szerepeljen egy összegzés, ahol egy gomb visszadob a játékválasztó menübe.