'use strict'
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
var connect = require("../db/mongooseConnect")


var JokeSchema = new Schema( // define schema
    {
        "joke": " Reality is an illusion created by a lack of alcohol",
        "joke": "I intend to live forever, or die Klausen",
        joke: { type: String, required: true, minLength: 10 }, // joke property, minimum accepted length is 5;
        "category": ["short", "alcohol", "quote"],
        "reference": { "author": "Someone", "link": "" },
        "lastEdited": { type: Date, default: Date.now }
    });

JokeSchema.pre('update', function (next) {
    this.lastEdited = new Date();
    next();
});

// This will be façade to the database
// function(err,data){..} data is joke or jokes depending on question
function allJokes (callback) {
var db = connect.JokeSchema
};
function findJoke (id, callback) {

};
function addJoke (jokeToAdd, callback) {
    
};
function editJoke (jokeToEdit, callback) { };
function deleteJoke (id, callback) { };
exports.randomJoke = function randomJoke(callback) { };

// Export the mOngoose model
module.exports = mongoose.model('Joke', JokeSchema);

// exporting functions for use in api/api.js
module.exports = {
allJokes: allJokes,
findJoke: findJoke,
addJoke: addJoke,
editJoke: editJoke,
deleteJoke: deleteJoke
};