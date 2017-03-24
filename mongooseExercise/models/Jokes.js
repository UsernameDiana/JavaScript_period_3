'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var JokeSchema = new Schema( // define schema
    {
        joke: { type: String, required: true, minLength: 5 }, // joke property, minimum accepted length is 5;
        category: [String],
        reference: { author: String, link: String },
        lastEdited: { type: Date, default: Date.now }
    });

JokeSchema.pre('save', function (next) {
    this.lastEdited = new Date();
    next();
});

mongoose.model("Joke", JokeSchema);