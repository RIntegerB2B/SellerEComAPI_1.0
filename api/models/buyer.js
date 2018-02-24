
var mongoose = require('mongoose');

const SellerBuyerSchema = new mongoose.Schema({
    firstName: { type: String, default: 0 },
   
    middleName: String,
    lastName:String,
    emailId: String,
    phoneNumber: Number,
    userName:String,
    password:String,
    address1:String,
    address2:String,
    isActive: Boolean,
    approvedBySeller:Number,
    createdDate: { type: Date, default: Date.now },
    securityQuestion: String,
    securityAnswer: String,
    city: String,
    state:String,
    billingAddress: String,
    shippingAddress: String
  });

  const SellerBuyer = mongoose.model('Buyer', SellerBuyerSchema);
  module.exports=SellerBuyer;