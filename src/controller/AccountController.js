const Mongoose = require('mongoose');
const Account = Mongoose.model('Account')

class AccountController{

  static async findAll(req, res){
    try {
      res.status(200).json(await Account.find({}));
    } catch (error) {
      console.log("[Account] : Buscar todas => ERRO " + error);
      res.status(500).send("Erro ao buscar contas");

    }
  }

  static async create(req, res){
    try {
      let newAccount = req.body;
      res.status(201).json(await Account.create(newAccount));
    } catch (error) {
      console.log("[Account] : Criar Conta => ERRO " + error);
      res.status(500).send("Erro ao criar Conta ");

    }
  }

  static async delete(req, res){
    try {
      let deleteAccountId = req.params.id;
      res.status(200).json(await Account.findOneAndDelete(deleteAccountId));
    } catch (error) {
      console.log("[Account] : Excluir Conta => ERRO " + error);
      res.status(500).send("Erro ao excluir conta");

    }
  }
}

module.exports = AccountController