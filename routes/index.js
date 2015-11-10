var express = require('express');
var router = express.Router();

router.get('/api/v1/guitars', function (req, res, next){
  res.json([
    {id: 1, make: 'Martin', model: 'D15'},
    {id: 1, make: 'Fender', model: 'Stratocaster'}
  ])
})
//always make wildcard route last or move to app.js
router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  })
});

module.exports = router;
