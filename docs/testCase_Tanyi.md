# Test Report
#### Tanyi Győző

Teszt sorszám | Funkció                                       | Eredmény                                                                                                | Státusz    | Megjegyzés | Tesztelő személy | Dátum
--- |-----------------------------------------------|---------------------------------------------------------------------------------------------------------|------------| --- | --- | --- 
1   | Szerver indítás (npm start)                   | Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'routes' imported from ...webshop/server/index.js     | sikertelen | - | Tanyi Győző | 2023.04.11.
2   | Szerver indítás (npm start)                   | Connected to backend! Port opened at: http://localhost:8800/ Connected to MongoDB!                      | sikeres    | - | Tanyi Győző | 2023.04.11.
3   | Szerver indítás (bcrypt modul használatakor)  | Error: ...webshop/server/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node: invalid ELF header    | sikertelen | - | Tanyi Győző | 2023.04.11.
4   | Szerver indítás (bcrypt újrainstallálás után) | Connected to backend! Port opened at: http://localhost:8800/ Connected to MongoDB!                      | sikeres    | - | Tanyi Győző | 2023.04.11.
5   | Teszt adat betöltése (seeds.js)               | Test users added to the database; Test categories added to the database; Products added to the database | sikeres    | - | Tanyi Győző | 2023.04.19.
