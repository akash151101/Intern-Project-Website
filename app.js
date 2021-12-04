const express = require("express");
const path = require("path");
const ejs = require("ejs");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("checkoutPage");
});


app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});