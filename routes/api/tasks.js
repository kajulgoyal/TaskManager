const Task = require('../../db').Task
const Note = require('../../db').Note

const route = require('express').Router()

function getDateFormat(objdate) {
    var date = new Date(Date.parse(objdate))
    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear(); 
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 
    date = mm + '-' + dd + '-' + yyyy;
    return date
  }

route.get('/', (req, res) => {

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

route.get('/:id', (req, res) => {

    const taskId = req.params.id 
    Task.findByPk(taskId)
    .then((tasks) => {
            res.status(200).send(tasks)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retreive task"
            })
        })
})


route.post('/', (req, res) => {
    date = getDateFormat(req.body.due_date)
    Task.create({
        title : req.body.title,
        description : req.body.description,
        due_date : date,
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

route.patch('/:id', (req, res) => {
    date = getDateFormat(req.body.due_date)
    Task.update(
        { due_date: date},
        { where: { id: req.params.id }
     }).then((task) => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not update new task"
        })
    })
})

route.get('/:id/notes', (req, res) => {

    Note.findAll({
        where : {
            taskId : req.params.id
        }
    })
        .then((notes) => {
            res.status(200).send(notes)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retreive notes"
            })
          })
})

route.post('/:id/notes', (req, res) => {

    Note.create({
        description : req.body.description,
        taskId : req.body.taskId
    }).then((note) => {
        res.status(201).send(note)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new node"
        })
    })
})

exports = module.exports = route