const route = require('express').Router()

route.use('/todos', require('./tasks'))
route.use('/todos/notes', require('./notes'))

exports = module.exports = {
    route
}
