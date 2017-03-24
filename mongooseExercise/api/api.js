let router = require("express").Router();
var Jokes = require('../models/Jokes');

//router.get("/", (req, res) => {
//  res.json({ msg: "Hello World" });
//});

//Get a List of all Jokes
router.get("/jokes", function (req, res, next) {
  list = {};
  Jokes.find(list, function (err, data) {
    if (!err) {
      res.json(data);
    }
    else {
      res.json({ msg: "error!" })
    }
  })
});

//Get an existing Joke by id
router.get("/jokes/:id ", function (req, res, next) {
  let jokeId = req.params.id;
  Jokes.findById(jokeId, function (err, data) {
    if (!err) {
      res.json(data);
    } else {
      res.json({ msg: "error!" });
    }
  })
});

//POST: Add a new Joke---------------------------TODO
router.post("/jokes", function (req, res, next) {
  let newJoke = req.body.joke;
  Jokes.add(newJoke, function (err, data) {
    if (!err) {
      res.send(newJoke);
    } else {
      res.json({ msg: "error!" });
    }
  })
});

//Edit an existing Joke-------------------------------TODO
router.put("/jokes/:id ", function (req, res, next) {

});

//Delete an existing Joke
router.delete("/jokes/:id", function (req, res, next) {
  let jokeId = req.params.id;
  Jokes.deleteById(jokeId, function (err, data) {
    if (!err) {
      res.status(204);
      res.send(data);
    } else {
      res.json({ msg: "error!" });
    }
  })
});


module.exports = router;