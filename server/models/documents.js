const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for documents
const documentSchema = new Schema({
    type: String,
    owner: String, // This is the id that "owns" this document. Use this like a foreign key
    prompt: String,
    thingsToMention: String,
    result: String,
    writingStyle: String,
    tone: String,
    keywords: String,
    imageContents: String,
    additions: String,
    length: String
})

const documentModel = mongoose.model("documents", documentSchema);

module.exports = documentModel;