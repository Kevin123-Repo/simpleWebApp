const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
    name:{},
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('contacts', contactsSchema)