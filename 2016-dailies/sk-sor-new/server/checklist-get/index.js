/**
 * Created by redboxnyc on 6/20/16.
 */

var checklistGetRouter = require('express').Router();
var Checklist = require('../models/checklist');

checklistGetRouter.get('/', function(req, res) {
  console.log('checklist get router root');

  // Checklist.findOne({groupId: 'checkliste2e2testsgroup'})
  //   .then(function(data) {
  //     console.log('data', data);
  //     if (data) {
  //       res.send('checklist get router root');
  //     } else {
  //       next(err);
  //     }
  //   });

  Checklist.findOne({}, function(err, checklist){
    console.log(checklist);
    if (checklist) {
      res.send(checklist);
    } else {
      res.send('error');
    }

  });

});


module.exports = checklistGetRouter;