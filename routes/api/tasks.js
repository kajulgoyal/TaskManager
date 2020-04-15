const Task = require('../../db').Task
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    Task.findAll()
        .then((tasks) => {
            res.status(200).send(tasks)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retreive tasks"
            })
        })
})

route.post('/', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 

    Task.create({
        title : req.body.title,
        description : req.body.description,
        due_date : req.body.due_date,
        status : req.body.status,
        priority : req.body.priority
    }).then((task) => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new task"
        })
    })
})

exports = module.exports = route