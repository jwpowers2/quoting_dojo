let mongoose = require('mongoose');


mongoose.model('Quote', new mongoose.Schema({

  name:{type:String, required:true, minlength:1,maxlength:255},
  quote:{type:String, required:true, minlength:1,maxlength:255}

},{timestamps: true}));
