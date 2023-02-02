const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for documents
const documentSchema = new Schema({
    type: String,
    owner: String, // This is the id that "owns" this document.
    prompt: String,
    thingsToMention: String,
    contents: String
})

const documentModel = mongoose.model("documents", documentSchema);

module.exports = documentModel;