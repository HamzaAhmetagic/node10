const express = require("express");
const app = express();
app.use((req, res, next) => {
    console.log('neko je kontaktirao ' + req.url);
    next()
});
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})
// app.get("/main.css", (req, res) => {
//     res.sendFile(__dirname + "/main.css")
// })
app.get("/cats", (req, res) => {

    res.sendFile(__dirname + "/cats.json")
})

app.listen(3000, function () {
    console.log('server pokrenut');
})