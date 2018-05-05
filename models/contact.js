var mongoose = require('mongoose');

//Contacts Schema

var contactSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    job:{
        type: String,
        required:true
    },
    location:{
        type: String
    },
    phone:{
        type: String
    }
});
var Contact = module.export = mongoose.model('Contact', contactSchema);

//GET contacts
module.exports.getContacts = function(callback, limit) {
    Contact.find(callback).limit(limit);
};

//Get contact
module.exports.getContactById = function(id, callback) {
    Contact.findById(id, callback);
};

//ADD contact
module.exports.addContact = function(contact, callback) {
    Contact.create(contact, callback);
};

//Update Contact
module.exports.updateContact = function (id, contact, options, callback) {
    var query = {_id: id};
    var update = {
        name:contact.name,
        job:contact.job,
        location:contact.location,
        phone:contact.phone
    };
    Contact.findOneAndUpdate(query, update, options, callback);
};


//Delete Contact
module.exports.removeContact = function(id,callback) {
    var query = {_id: id};
    Contact.remove(query, callback);
};