/**
 * Created by redboxnyc on 6/20/16.
 */
var checklistPostRouter = require('express').Router();

checklistPostRouter.get('/', function(req, res) {
  console.log('checklist post router root');
  res.send('checklist post rounter root');
});

module.exports = checklistPostRouter;