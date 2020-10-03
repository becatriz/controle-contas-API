const AccountController = require('../controller/AccountController')

class AccountRoute{
  constructor(app){

    app
      .route('/accounts')
      .get(AccountController.findAll)
      .post(AccountController.create)
      .delete(AccountController.delete)
  }
} 

module.exports = AccountRoute