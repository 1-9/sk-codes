var mongoose = require('../db');

// Models - http://mongoosejs.com/docs/models.html
// Schemas - http://mongoosejs.com/docs/guide.html

var checklistTemplateSchema = mongoose.Schema({
  aoid: String,
  ooid: String,
  name: String,
  email: String,
  givenName: String,
  familyName: String,
  accounts: {}
  // Use Schema.add if we need to add more fields
  //ToySchema.add({ name: 'string', color: 'string', price: 'number' });

});