const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
app.use(cors());
// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Running fake api json server");
});
