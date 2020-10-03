const Express = require('express');
const Mongoose = require('mongoose');
const Cors = require('cors');

const env = process.NODE_ENV || 'development';
const config = require('./config.json')[env];

const User = require('./src/model/User');
const Account = require('./src/model/Account');

const DB_URL = `${config.database.protocol}://${config.database.user}:${config.database.password}@${config.database.host}/${config.database.name}?retryWrites=true&w=majority`;

class App {
  constructor() {
    this.app;
  }

  init() {
    this.app = Express();
    this.app.use(Express.json());
    this.app.use(Cors());

    Mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }, function (err, client) {

      if (err) {
        console.log("Database connection error");
        process.exit(0)
      } else {
        console.log("Database successfully connected");
      }

    });
    this.app.get("/", (req, res) => {
      res.send("API controle de contas a receber e a pagar");
    });

    this.app.listen(config.port, () => {
      console.log(`Server running at http://${config.host}:${config.port}/`);
    });


    //User
    new User();
    const UserRoute = require('./src/router/UserRoute')
    new UserRoute(this.app);

    //Account
    new Account();
    const AccountRoute = require('./src/router/AccountRoute')
    new AccountRoute(this.app);





  }
}

new App().init()