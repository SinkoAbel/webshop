# Funkcionális specifikáció
## 1. Áttekintés
A webshop célja az online értékesítés támogatása, amely lehetővé teszi a vásárlók számára a termékek böngészését, a termékek kosárba helyezését, a bejelentkezést és a rendelés leadását. Az adminisztrátori jogkörrel rendelkező felhasználók képesek lesznek a termékek listázására, hozzáadására, módosítására és törlésére.

## 2. Jelenlegi helyzet
A webshop még nincs elkészítve, de az alapvető funkciók már meghatározásra kerültek. A webshop a főoldalt, a regisztrációs oldalt, a bejelentkezési oldalt, a termékek listázási oldalt és a kosár oldalt fogja tartalmazni.

## 3. Jelenlegi üzleti folyamatok modellje
A jelenlegi üzleti folyamatok modellje nem létezik, mivel a webshop még nem készült el.

## 4. Igényelt üzleti folyamatok modellje
Az igényelt üzleti folyamatok modellje a következő:

- A felhasználók a webshop főoldalán böngészhetik a termékek listáját.
- A felhasználók kiválaszthatják a termékeket és kosárba helyezhetik azokat.
- A felhasználók bejelentkezhetnek a rendszerbe vagy regisztrálhatnak, ha még nincsenek regisztrálva.
- A bejelentkezett felhasználók látják az összes korábban elmentett kosarat, és megtekinthetik a rendeléseiket.
- Az adminisztrátori jogkörrel rendelkező felhasználók hozzáadhatnak, módosíthatnak és törölhetik a termékeket.
- Az adminisztrátori jogkörrel rendelkező felhasználók megtekinthetik a rendeléseket és azok státuszát.

## 5. Követelmények
A követelmények a következők:

- Felhasználók számára:
	- Regisztráció
	- Bejelentkezés/Kijelentkezés
	- Termékek listázása
	- Kosárba helyezés
	- Rendelések leadása
	- Rendelések megtekintése
- Adminisztrátori jogkörrel rendelkező felhasználók számára:
	- Termékek hozzáadása/módosítása/törlése
	- Rendelések

## 6. Használati esetek
### Vásárlói szerepkör
1. Főoldal megtekintése: A felhasználó megtekintheti a webshop főoldalát.
2. Regisztráció: A felhasználó regisztrálhat az oldalon, megadva a kötelező adatokat (felhasználónév, jelszó, név, cím).
3. Bejelentkezés: A felhasználó bejelentkezhet a webshopba, megadva a felhasználónevét és jelszavát.
4. Termékek megtekintése: A felhasználó megnézheti a webshopban kapható termékek listáját, szűrheti és rendezheti azokat különböző szempontok alapján.
5. Termék kosárba helyezése: A felhasználó hozzáadhat egy vagy több terméket a kosarához, amelyeket később rendelni szeretne.
6. Rendelés leadása: A felhasználó elküldheti a kosárban lévő termékeket tartalmazó rendelését.
7. Kijelentkezés: A felhasználó kijelentkezhet a webshopból.

### Adminisztrátori szerepkör
1. Termékek felvétele: Az adminisztrátor hozzáadhat új terméket a webshophoz, megadva a termék nevét, leírását, árát és egyéb tulajdonságait.
2. Termékek módosítása: Az adminisztrátor módosíthatja a webshopban található termékek tulajdonságait, pl. a nevüket, leírásukat vagy árukat.
3. Termékek törlése: Az adminisztrátor eltávolíthatja a webshopból a nem kapható vagy nem aktuális termékeket.
4. Rendelések megtekintése: Az adminisztrátor megtekintheti a beérkezett rendeléseket, azok állapotát és a rendelés leadója nevét.
5. Rendelések státuszának frissítése: Az adminisztrátor frissítheti a rendelések státuszát, pl. az elküldött rendeléseket az "elküldve" státuszba állíthatja, az elküldött és kifizetett rendeléseket pedig az "elküldve és kifizetve" státuszba állíthatja.

## 7. Képernyőterv
(folyamatban)

## 8. Forgatókönyv
### 8.1. Regisztráció forgatókönyve:

- A felhasználó az oldal tetején található "Regisztráció" gombra kattint.
- Az oldal a regisztrációs űrlapot jeleníti meg, ahol a felhasználó kitölti az összes kötelező mezőt.
- Az űrlap elküldése után az oldal ellenőrzi az adatok helyességét, majd hiba esetén megjeleníti az üzenetet.
- Ha a regisztráció sikeres, az oldal visszairányítja a felhasználót a főoldalra, ahol bejelentkezhet.

### 8.2. Bejelentkezés forgatókönyve:

- A felhasználó az oldal tetején található "Bejelentkezés" gombra kattint.
- Az oldal a bejelentkező űrlapot jeleníti meg, ahol a felhasználó megadja az email-címét és a jelszavát.
- Az űrlap elküldése után az oldal ellenőrzi az adatok helyességét, majd hiba esetén megjeleníti az üzenetet.
- Ha a bejelentkezés sikeres, az oldal visszairányítja a felhasználót a főoldalra, ahol elérhetővé válnak a bejelentkezett felhasználók számára elérhető funkciók.

### 8.3. Termékek listázásának forgatókönyve:

- A felhasználó a főoldalon található "Termékek" menüpontra kattint.
- Az oldal betölti a termékek listáját, amelyen minden termék neve, ára és rövid leírása szerepel.
- A felhasználó kiválasztja a kívánt terméket, majd a "Kosárba" gombra kattint.
- Az oldal hozzáadja a terméket a kosárhoz, majd visszairányítja a felhasználót a főoldalra.

### 8.4. Kosár tartalmának megjelenítésének forgatókönyve:

- A felhasználó a főoldalon található "Kosár" menüpontra kattint.
- Az oldal betölti a kosár tartalmát, amelyen minden termék neve, ára és mennyisége szerepel.
- A felhasználó módosíthatja a termékek mennyiségét, vagy eltávolíthatja a terméket a kosárból.
- Ha a felhasználó elégedett a kosár tartalmával, a "Fizetés" gombra kattintva továbbhaladhat a


