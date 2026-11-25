1. réteg: projekt váza: könyvtárak étrehozása, csomagok letöltése git, git-hub, git-ignore, .env
2. adatbázis létrehozása (xampp) (sql-createdb), config/index.js, db/sequelize.js
3. réteg: model (user model), db:sync, db:seed
4. réteg: repository layer + teszt user.repository.js + node test parancs :
node -e "require('./src/repositories/user.repository').findAll().then(u=>console.log(JSON.stringify(u, null, 2)))"
5. réteg: service réteg:  utils -> AppError, service->repo függvényhívások.
6. réteg: controller réteg: service hívások definiálása, json response

