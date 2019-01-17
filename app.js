const express = require("express");
const morgan = require("morgan");
const layout = require('./views/layout')
const modelsObj = require('./models'); // will look for index.js

const app = express();

// modelsObj.db.authenticate().
// then(() => {
//   console.log("we're connected");
// })

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send('Hello World');
// });

app.get("/", (req, res) => {
  res.send(layout(''));
})

const PORT = 3000;

const init = async () => {
  await modelsObj.db.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();
