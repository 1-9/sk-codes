var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');

var app = new express();

var checklistPostRouter = require('../server/checklist-post');
var checklistGetRouter = require('../server/checklist-get');

app.use(bodyparser.json());
app.use(morgan('combined'));

app.use('/events/hr/v1/checklists', checklistPostRouter);
app.use('/hr/v1', checklistGetRouter);

app.get('/', function(req, res) {
  console.log('root path');
});

app.listen(3000);
