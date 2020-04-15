const Sequelize = require('sequelize')

const db = new Sequelize('taskdb', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: __dirname + '/taskmanager.db',
    pool: {
        min: 0,
        max: 5,
    }
})

const Task = db.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    due_date: {
        type: Sequelize.DATE,
    },
    status: {
        type: Sequelize.STRING,
    },
    priority: {
        type: Sequelize.STRING,
    }
})

const Note = db.define('notes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
Task.hasMany(Note);
db.sync({force : true})
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Task, Note
}
