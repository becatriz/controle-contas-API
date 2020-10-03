const Mongoose = require('mongoose');

class Account extends Mongoose.Schema{
  constructor(){
    super({
      description: {
        type: String,
        required: true
      },
      observation: {
        type: String,
        required: false
      },
      date: {
        type: Date,
        required: true
      },
      type: {
        type: String,
        enum: ["Receita", "Despesa"],
        required: true
      },
      value: {
        type: Number,
        required: true
      },
    });

    Mongoose.model("Account", this);
  }
}

module.exports = Account