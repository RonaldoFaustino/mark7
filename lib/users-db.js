const mongoose = require('mongoose');
const config = require('./conf-db');

const { db: {host, port, user, pass, database } } = config;

//const mongoStrConn = "mongodb://heroku_4m3km28x:rmrm93njviet46a4caul3svj4p@ds225078.mlab.com:25078/heroku_4m3km28x"

const mongoStrConn = `mongodb://${user}:${pass}@${host}:${port}/${database}`;
mongoose.connect(mongoStrConn)

const UserSchema = new mongoose.Schema({
    _id: String,
    profile: {
        name: String,
        email: String
    } 
});

const User = mongoose.model('users', UserSchema)

module.exports = {
    getByEmail: UserEmail => User.findOne({'profile.email': userEmail})
}


