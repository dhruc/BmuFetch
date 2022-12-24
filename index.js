const express = require('express');
const ejs = require('ejs');
const PORT = 5000
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Adding = require('./models/Users');

mongoose.connect('mongodb://localhost:27017/bmuDB');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    Adding.find({})
    .then((x)=>{
        res.render('../views/index.ejs',{x});
        console.log(x);
    })
    .catch((y)=>{
        console.log(y);
    })
})
app.get('/Adding', (req, res) => {
    res.render('index')
})
///////     Post requiest are here      //////////////
app.post('/Adding', (req, res) => {
    const fullname = req.body.fullname;
    const usern = req.body.usern;
    const dept = req.body.dept;
    const BCP = req.body.BCP;
    const BOI = req.body.BOI;
    const Math = req.body.Math;
    const es = req.body.es;
    const FEEE = req.body.FEEE;
    const EG = req.body.EG;
    const IC = req.body.IC;

    const newUser = new Adding({
        fullname: fullname,
        usern: usern,
        dept: dept,
        BCP: BCP,
        BOI: BOI,
        Math: Math,
        es: es,
        FEEE: FEEE,
        EG: EG,
        IC:IC
    });

    newUser.save((err) => {
        err ? console.log(err) : res.send('Sucessfullly Data Are Submitted');
    })

})


app.listen(PORT, () => console.log('server started on port 5000'))

// fullname: String,
//    enroll: String,
//    dept:String,
//    BCP:Number,
//    BOI:Number,
//    Math:Number,
//    es:Number,
//    FEEE:Number,
//    EG:Number

