const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const db = require('./models').db;
const nunjucks = require('nunjucks');
const routes = require('./routes');  // point to the route folder


const environment = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.use(express.static(__dirname + '/public'));
app.use('/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/', routes);

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  console.error(err);
  // res.render('./views/error');
})


// app.get('/', function(req, res, next){
//   res.render('index')               //we will need to change to render
// })

db.sync()
  .then(function(){
    app.listen(3000, function(){
      console.log('listening on port 3000')
    });
  });

module.exports = app;
