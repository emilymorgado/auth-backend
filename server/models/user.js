const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema); //loads schema into mongoose ORM

// Export the model
module.exports = ModelClass;
