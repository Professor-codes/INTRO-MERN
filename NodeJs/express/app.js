const express = require("express");
const path = require("path");
const fs = require('fs');

const app = express();
const port = 3000;

// 2
// // for serving static file
// app.use('/static', express.static('static'));
app.use(express.urlencoded());

// // set the template engine as pug
// app.set('view engine', 'pug');

// // set the views directory
// app.set('views', path.join(__dirname, 'views'));
// // pug demo end point
// app.get('/demo', (req, res) => {
//     res.status(200).send('demo', { title: "Hey", message: "Hello there!" });
// });

// 3
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.listen(port, () => {
    console.log(`port running at ${port}`);
});
// endpoint
app.get('/open', (req, res) => {
    // const params = { 'title': "Pug", 'message': "This is message for pug" };
    // res.status(200).render('index.pug', params);
    res.status(200).render('index.pug');
});

// output - js object into console
// app.post('/', (req, res) => {
//     console.log(req.body);
//     const params = { 'msg': "Your form has been submitted successfully" };
//     res.status(200).render('index.pug', params);
// });

app.post('/', (req, res) => {
    name = req.body.name;
    age = req.body.age;
    address = req.body.address;
    let output = `The name of the client is : ${name} \nAge is : ${age} \nResiding at : ${address}`;
    fs.writeFileSync('output.txt', output);
    const params = { 'msg': "Your form has been submitted successfully" };
    res.status(200).render('index.pug', params);
});

// 1
// app.get("/", (req, res) => {
//     res.send("This is the index page >> Get");
// });
// app.post("/", (req, res) => {
//     res.send("This is the index page >> Post")
// });
// app.get("/home", (req, res) => {
//     res.send("This is the home page >>");
// });
// app.post("/home", (req, res) => {
//     res.send("This is the home page >> Post");
// });
// app.get("/about", (req, res) => {
//     res.send("This is the about page >>")
// });
// app.post("/about", (req, res) => {
//     res.send("This is the about page >> Post");
// });
// app.get("/this", (req, res) => {
//     res.status(404).send("404 - Page not found!");
// });
// app.listen(port, () => {
//     console.log(`server running at port ${port}`);
// });
