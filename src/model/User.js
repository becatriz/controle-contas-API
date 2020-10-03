const Mongoose = require('mongoose');

class User extends Mongoose.Schema{
  constructor(){
    super({
      username: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      },
    });

    Mongoose.model("User", this);
  }
}

module.exports = User