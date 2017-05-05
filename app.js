const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const db = require('./models').db;
const nunjucks = require('nunjucks');

const environment = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.get('/', function(req, res, next){
  res.render('index')               //we will need to change to render
})

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  console.error(err);
  res.render('./views/error')
})

db.sync()
  .then(function(){
    app.listen(1337, function(){
      console.log('listening on port 1337')
    });
  });

module.exports = app;
