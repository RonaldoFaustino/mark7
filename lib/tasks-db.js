const mongoose = require('mongoose');
const config = require('./conf-db');

const { db: {host, port, user, pass, database } } = config;

//const mongoStrConn = "mongodb://heroku_4m3km28x:rmrm93njviet46a4caul3svj4p@ds225078.mlab.com:25078/heroku_4m3km28x"

const mongoStrConn = `mongodb://${user}:${pass}@${host}:${port}/${database}`;
mongoose.connect(mongoStrConn)

const TaskSchema = new mongoose.Schema({
    title: String,
    dueDate: Date,
    done: Boolean,
    tags: Array,
    createdBy: String
});

const Task = mongoose.model('tasks', TaskSchema)

module.exports = {
    addTask: task => new Task(task).save(),
    deleteByName: taskName => Task.remove({title: taskName})
}

