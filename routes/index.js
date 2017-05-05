const express = require('express');
const router = express.Router();
var db = require('../models').db;
var Place = require('../models').Place;
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;


router.get('/', function(req, res, next){
  var container = {};
  Hotel.findAll()
  .then(function(hotels){
    container.hotels = hotels;
    return Restaurant.findAll();
  })
  .then(function(resturants){
    container.resturants = resturants;
    return Activity.findAll();
  })
  .then(function(activities){
    container.activities = activities;
    res.json(container);
  })
  .catch(next);
});



module.exports = router;
