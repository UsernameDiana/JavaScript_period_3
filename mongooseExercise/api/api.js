var express = require('express');
let mongoose = require("mongoose");
// To accept data via POST or PUT, add another package called body-parser.
// npm install body-parser --save
var bodyParser = require('body-parser');
let router = require("express").Router();
var jokesFacade = require('../models/Jokes');

// Create our Express application
// var app = express();

router.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

//GET:    /api/jokes        Get a List of all Jokes
router.get("/api/jokes", function (req, res, next){
jokesFacade.allJokes();
});

//GET:    /api/jokes/:id    Get an existing Joke by id
router.get("/api/jokes/:id ", function (req, res, next){
  jokesFacade.findJoke();
});

//POST:   /api/jokes/       Create a new Joke
router.post("/api/jokes/", function (req, res, next){
var joke = new jokesFacade();
  joke = "hahaha";
});

//PUT:    /api/jokes/:id    Edit an existing Joke
router.put("/api/jokes/:id ", function (req, res, next){

});
//DELETE: /api/jokes/:id    Delete an existing Joke
router.delete("/api/jokes/:id", function (req, res, next){
  jokesFacade.deleteJoke();
});

module.exports = router;
