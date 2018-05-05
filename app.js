var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Contact = require('./models/contact');

//connect to mongoose
mongoose.connect('mongodb://localhost/contactstore');
var db = mongoose.connection;

app.get('/', function (req,res) {
    res.send('Hello word');
});

app.get('/api/genres',function (req,res) {
 Genre.getGenre(function (err, genres) {
     if(err){
         throw err;
     }
     res.json(genres);
 })
});

app.post('/api/genres',function (req,res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});

app.put('/api/genres/:_id',function (req,res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});

app.delete('/api/genres/:_id',function (req,res) {
    var id = req.params._id;
    Genre.removeGenre(id, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});

app.get('/api/contacts',function (req,res) {
    Contact.getContacts(function (err, contacts) {
        if(err){
            throw err;
        }
        res.json(contacts);
    })
});

app.get('/api/contacts/:_id',function (req,res) {
    Contact.getContactById(req.params._id, function (err, contact) {
        if(err){
            throw err;
        }
        res.json(contact);
    })
});

app.post('/api/contacts',function (req,res) {
    var contact = req.body;
    Contact.addContact(contact, function (err, contact) {
        if(err){
            throw err;
        }
        res.json(contact);
    })
});

app.put('/api/contacts/:_id',function (req,res) {
    var id = req.params._id;
    var contact = req.body;
    Contact.updateContact(id, contact, {}, function (err, contact) {
        if(err){
            throw err;
        }
        res.json(contact);
    })
});

app.delete('/api/contacts/:_id',function (req,res) {
    var id = req.params._id;
    Contact.removeContact(id, function (err, contact) {
        if(err){
            throw err;
        }
        res.json(contact);
    })
});

app.listen(3000);
console.log('Running on port 3000');