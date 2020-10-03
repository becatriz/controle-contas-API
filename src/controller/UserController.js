const Mongoose = require('mongoose');
const User = Mongoose.model('User')

class UserController{

  static async findAll(req, res){
    try {
      res.status(200).json(await User.find({}));
    } catch (error) {
      console.log("[User] : Buscar todos => ERRO " + error);
      res.status(500).send("Erro ao buscar usuários");

    }
  }

  static async create(req, res){
    try {
      let newUser = req.body;
      res.status(201).json(await User.create(newUser));
    } catch (error) {
      console.log("[User] : Criar Usuário => ERRO " + error);
      res.status(500).send("Erro ao criar usuário");

    }
  }

  static async update(req, res){
    try {
      let updateUser = req.body;
      res.status(200).json(await User.findByIdAndUpdate(updateUser._id, updateUser));
    } catch (error) {
      console.log("[User] : Atualizar Usuário => ERRO " + error);
      res.status(500).send("Erro ao atualizar usuário");

    }
  }
}

module.exports = UserController