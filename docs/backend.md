## Endpoints

|       URI            | HTTP Metódus | Autentikáció | Válasz típusa  | Leírás                                   |
|----------------------|--------------|--------------|----------------|------------------------------------------|
| /api/register        | POST         | Nincs        | User object    |                                          |
| /api/login           | POST         | Basic HTTP   | User object    |                                          |
| /api/logout          | POST         | Basic HTTP   | Message object |                                          |
| /api/user/:id        | GET          | Basic HTTP   | User object    |                                          |
| /api/user/:id        | PUT          | Basic HTTP   | Message object |                                          |
| /api/user/:id        | DELETE       | Basic HTTP   | Message object |                                          |
| /api/products        | GET          | Basic HTTP   | Array of products |                                       |
| /api/products/:id    | GET | Basic HTTP | Product object | |
| /api/products        | POST | Basic HTTP | Product object | |
| /api/products/:id    | PUT | Basic HTTP | Message object | |
| /api/products/:id    | DELETE | Basic HTTP | Message object | |
| /api/orders          | POST | Basic HTTP | Order Object | Az új rendelés felvétele a rendelések táblába a bejelentkezett felhasználó azonosítójával. A rendeléshez tartozó termékazonosítók és mennyiségek egy tömbben kerülnek elküldésre a kliens által. |
| /api/orders          | GET | Basic HTTP | Order Object Array | Az összes rendelés lekérdezése a rendelések táblából. A válasz tömb tartalmazza az összes rendelés objektumait. |
|/api/orders/:orderId  | GET | Basic HTTP | Order Object | Az adott orderId-hez tartozó rendelés lekérdezése a rendelések táblából. |
| /api/orders/:orderId | PUT| Basic HTTP | Order Object | Az adott orderId-hez tartozó rendelés módosítása a rendelések táblában. A módosítani kívánt adatok az elküldött objektumban találhatóak. |
| /api/orders/:orderId | DELETE | Basic HTTP | Order Object | Az adott orderId-hez tartozó rendelés törlése a rendelések táblából. |