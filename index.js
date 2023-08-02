const express = require("express");
const Datastore = require("nedb");

const app = express();

const port = 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
app.use(express.static("public"));
app.use(express.json());

const database = new Datastore("database.db");
database.loadDatabase();

app.post("/api", (req, res) => {
  const data = req.body;
  database.insert(data);
  res.json({
    status: "Success",
    firstName: data.firstName,
    lastName: data.lastName,
    timeStamp: data.timeStamp,
  });
});
