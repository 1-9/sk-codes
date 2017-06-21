var mongoose = require('../db');

// Models - http://mongoosejs.com/docs/models.html
// Schemas - http://mongoosejs.com/docs/guide.html

var checklistSchema = mongoose.Schema({
  tasks: [],
  groupId: String,
  assigneeAoid: String,
  creatorAoid: String,
  orgoid: String,
  creationDate: Date,
  updatedDate: Date,
  virtuals: {},
  originalHireDate: Date
  
  // Use Schema.add if we need to add more fields
  //ToySchema.add({ name: 'string', color: 'string', price: 'number' });

});

module.exports = mongoose.model('Checklist', checklistSchema, 'checklist');
