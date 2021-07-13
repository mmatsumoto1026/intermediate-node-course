const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: ture },
    email: { type: String, required: ture, unique: true },
    password: { type: String, required: true }
});

module.exports= mongoose.model('User',UserSchema)