const express = require('express');
const router = express.Router();
const Contacts = require('../models/contacts')

//Get All contacts
router.get('/',async (req,res)=> {
    try{
        const contacts = await Contacts.find()
        res.json(contacts)
    }catch(err){
        res.status(500).json({message: error.message})
    }
})
//Get One contact based on id
router.get('/:id', async (req,res)=> {
    try{
        contact = await Contacts.findById(req.params.id)
        res.json(contact)
    
    }catch(err){
        res.status(400).json({message: err.message})
    } 
})
//Create new conatct
router.post('/',async(req,res)=> {
    const contacts = new Contacts ({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        postcode: req.body.postcode
    })
    try{
        const newContacts = await contacts.save();
        res.status(201).json(newContacts)
    }catch(err){
        res.status(400).json({message: err.message}) 
    }
})

//Edit one
router.patch('/:id', async (req,res)=> {
    try{
        const updateContact = await Contacts.findById(req.params.id)
        if(!updateContact){
            return res.status(505).json({message: 'Contact not found'});
        }
        if(req.body.firstName != null){
            updateContact.firstName = req.body.firstName;
        }
        if(req.body.lastName != null){
            updateContact.lastName = req.body.lastName;
            updateContact.markModified('lastName');
        }
        if(req.body.email != null){
            updateContact.email = req.body.email;
        }
        if(req.body.address != null){
            updateContact.address = req.body.address;
        }
        if(req.body.city != null){
            updateContact.city = req.body.city;
        }
        if(req.body.postcode != null){
            updateContact.postcode = req.body.postcode;
        }
        const updatedContact = await updateContact.save();
        res.json(updatedContact);
    }catch(err){
        res.status(400).json({message: err.message})
    }


})
 
//Delete
router.delete('/:id',async(req,res)=> {
 try{
   const deletedContact = await Contacts.findByIdAndDelete(req.params.id);
   res.json({message: `Delete Contact with ID ${deletedContact.id}`});
   
 }catch(err){
    res.status(500).json({message: err.message})
 }
})

 module.exports = router;