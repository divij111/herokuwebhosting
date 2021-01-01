const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 9000; /*if we want to host website on real server we use this*/
const path = require('path');

//public static path
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialsPath);

app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.static(staticPath));
//routing
app.get("/",(req,res)=>{
res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
res.render("404",{
 errorMsg:'OOPS! Page Not Found! Go Back!!'
});
});
app.listen(port,()=>{
console.log(`Server is listening at ${port}`);
});
