const express = require("express"); // Esto es como el include de c pero me devuelve una clase de "objeto global"

const app = express(); // Ejecuto el "constructor" de express y llamo a la instancia del "objeto global" app

const PORT = 8080; // define

// "Middleware"
app.use(express.json()); // Parseo automaticamente los req q vengan en formato json, y luego puedo acceder a sus "categorías" como "atributos"


// Test Endpoints
app.get("/test", (req, res) => {
  res.send("server working correctly");
})

app.post("/echo_test", (req, res) => {
  res.send("server recived: " + req.body.msg + "\n");
})

// Post and Get endpoints

let proyectos = []; // Temporary array to store proyects

app.get("/get_prj", (req, res) => {
  res.send(proyectos + "\n");
  console.log("User requested project list");
})

app.post("/post_prj", (req, res) => {
  proyectos.push(req.body.prj);
  res.send("\nserver stored proyect: " + req.body.prj + "\n");
  console.log("User posted project: " + req.body.prj + "\n");
})




app.listen(PORT, () => {
    console.log("Server running on port" + PORT)
})
