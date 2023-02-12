const express = require("express");
const app = express();
const port = 80;
const path = require('path');

const bodyparser = require("body-parser")


// ==========================================================
var mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/varaddance');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// -------------------------------------------------------------
var contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

//   ------------------------------------------------------
// yaha par hmne contact naam ka model bana liya 
var contact = mongoose.model('contact', contactschema);

// ----------------------------------------------------------





app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/', (req, res) => {
    const vrd = {}
    res.status(200).render('home.pug', vrd)
})

app.get('/contact', (req, res) => {
    const vrd = {}
    res.status(200).render('contact.pug', vrd)
})

app.post('/contact', (req, res) => {
    var mydata = new contact(req.body);
    mydata.save().then(() => {
        res.send("this item has been saved to data base")
    }).catch(() => {
        res.status(400).send("item was not send to database")
    });
    // res.status(200).render('contact.pug')
})

app.listen(port, () => {
    console.log(`this app started successfully on port ${port}`)
})