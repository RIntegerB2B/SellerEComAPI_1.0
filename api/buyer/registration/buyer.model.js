
var mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    firstName: { type: String, default: 0 },
   
    middleName: String,
    lastName:String,
    emailId: { type: Number, default: 0 },
    phoneNumber: Number,
    userName:String,
    password:String,
    address1:String,
    address2:String,
    isActive: Boolean,
    approvedBySeller:Boolean,
    createdDate: { type: Date, default: Date.now }
  });

  const Buyer = mongoose.model('Buyer', BuyerSchema);
  module.exports=Buyer;