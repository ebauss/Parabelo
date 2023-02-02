const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for documents
const documentSchema = new Schema({
    documentType: String,
    playerOwner: String, // This is the username that "owns" this game.
    documentContents: String 
})

const documentModel = mongoose.model("documents", documentSchema);

module.exports = documentModel;