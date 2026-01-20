const express = require("express"); // Esto es como el include de c pero me devuelve una clase de "objeto global"

const app = express(); // Ejecuto el "constructor" de express y llamo a la instancia del "objeto global" app

const PORT = 8080; // define


app.get("/ping", (req, res) => {
  res.send("pong");
})

app.listen(PORT, () => {
    console.log("Server running on port" + PORT)
})
