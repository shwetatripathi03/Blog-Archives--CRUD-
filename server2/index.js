var express = require('express'),
  http = require('http');

var blogs = require('./data/blogs.json');

var app = express()
  .use(express.bodyParser())
  .use(express.static('public'));

app.get('/blogs', function  (req, res) {
  res.json(blogs);
});

app.get('/blogs/:id', function (req, res) {
  if (typeof blogs[req.params.id] === 'undefined') {
    res.json(404, {status: 'not found - invalid id'});
  } else {
    res.json(blogs[req.params.id]);
  }
});

app.delete('/blogs/:id', function (req, res) {
  if (typeof blogs[req.params.id] === 'undefined') {
    res.json(404, {status: 'not found - invalid id'});
  } else {  
    delete blogs[req.params.id];
    res.json(200, {status: 'deleted'});
  }
});

app.post('/blogs', function(req, res){

  if (req.body.title && req.body.text) {
    var d = (req.body.id) ? Number(req.body.id) : new Date().getTime();
    var doc =  {
      "id": d,
      "title": req.body.title,
      "text": req.body.text,
      "timestamp": d
    }

    blogs[d] = doc;
    res.json(200, {status : "Saved"});
  }else {
    res.json(404, {status: 'invalid data'});
  }
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});