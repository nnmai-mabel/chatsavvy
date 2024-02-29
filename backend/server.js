const express = require("express")

// Create express server
const app = express();

// Test route
app.get("/", (req, res) => {
    // root route http://localhost:5001/
    res.send("Hello World");
})
app.listen(5001, () => console.log("server running on port 5001"));