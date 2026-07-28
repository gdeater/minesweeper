const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/scores",(req,res) => {
    const data = fs.readFileSync(path.join(__dirname,"scores.json"));
    const scores = JSON.parse(data);
    res.json(scores);
});

app.post("/scores",(req, res) => {
    const newScore = req.body;
    const data = fs.readFileSync(path.join(__dirname,"scores.json"));
    const scores = JSON.parse(data);
    scores.push(newScore);

    fs.writeFileSync(path.join(__dirname,"scores.json"),
        JSON.stringify(scores)
    );
    res.json(scores);

})
app.listen(3001, () => {
    console.log("hello");
});
