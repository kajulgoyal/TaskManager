const route = require('express').Router()

route.use('/todos', require('./tasks'))

exports = module.exports = {
    route
}
