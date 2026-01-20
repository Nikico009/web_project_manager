const express = require("express"); // This is like a C include, but it returns a "global object" class

const app = express(); // Execute the "constructor" of express and get the instance of the global "app" object

const PORT = 8080; // define port

// Middleware
app.use(express.json()); // Automatically parse requests coming in JSON format, then I can access their "fields" like object attributes

// Test Endpoints
app.get("/test", (req, res) => {
  res.send("server working correctly");
})

app.post("/echo_test", (req, res) => {
  res.send("server received: " + req.body.msg + "\n");
})

// Post and Get endpoints

let projects = []; // Temporary array to store projects

app.get("/get_prj", (req, res) => {
  res.send(projects + "\n");
  console.log("User requested project list");
})

app.post("/post_prj", (req, res) => {
  projects.push(req.body.prj);
  res.send("\nserver stored project: " + req.body.prj + "\n");
  console.log("User posted project: " + req.body.prj + "\n");
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

