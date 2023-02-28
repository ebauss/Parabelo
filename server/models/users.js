const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for documents
const userSchema = new Schema({
    owner: String,  // This is the id that "owns" this document. Use this like a foreign key
    isFreeTrial: Boolean,   // True if user has a free trial, else False
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;