const Note = require('../../db').Note
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    Note.findAll()
        .then((note) => {
            res.status(200).send(note)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retreive notes"
            })
        })
})

route.post('/', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 

    Note.create({
        description : req.body.description
    }).then((note) => {
        res.status(201).send(note)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new note"
        })
    })
})

exports = module.exports = route