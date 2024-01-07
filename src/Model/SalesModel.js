const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    product: {type: String,required: true,},
    quantity: {type: Number,required: true,},
    price: {type: Number,required: true,},
    date: {type: Date,default: Date.now},
    companyPrice: {type: Number,required: true,},
    sale_price: {type: Number,required: true}
  },
  { timestamps: true, versionKey: false }
);

const SalesModel = mongoose.model('Sales', dataSchema);

module.exports = SalesModel;
