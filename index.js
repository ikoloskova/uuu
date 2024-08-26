import express from "express";
let app = express();


app.get("/1/", function(req, res) {
    res.send("online_books.html");
});

app.get("/2/", function(req, res) {
    res.send("shopping_basket.html");
});

app.get("/3/", function(req, res) {
    res.send("prof_js_details.html");
});

app.get("/4/", function(req, res) {
    res.send("beg.asp3_details.html");
});

app.use(function(req, res) {
    res.status(404).send("not found");
})
