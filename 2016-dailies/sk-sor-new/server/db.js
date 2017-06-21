var url = 'mongodb://localhost:27017/profile';
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require("mongoose"));

// Use Bluebird's promises instead of the native mongoose
// http://mongoosejs.com/docs/promises.html

mongoose.Promise = Promise;

mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;
