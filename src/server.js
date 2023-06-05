const app = require("./app");
const { db } = require("./database/config");

db.authenticate()
  .then(() => console.log("auntenticado correctamente 👌"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("acceso a la base de datos 😁"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server running port: 3000 😎");
});
