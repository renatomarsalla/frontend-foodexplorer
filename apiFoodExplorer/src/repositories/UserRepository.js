const { connectionKnex } = require("../database/knex/index.js");

class UserRepository {
  //this function get the email
  async userExists(email) {
    const emailAlreadyExists = await connectionKnex("users").where({ email });
    return emailAlreadyExists;
  }

  //this function create an user
  async create({ name, email, password, isAdmin }) {

    if (email.includes('admin')) {
      isAdmin = 1;
    } else {
      isAdmin = 0;
    }

    const userId = await connectionKnex('users').insert({
      name,
      email,
      password,
      admin: isAdmin
    });

    return { id: userId };
  }

  async idExists(id) {
    const selectId = await connectionKnex('users').where({ id });
    return selectId;
  }


  async updateUser({ name, email, password, updated_at, id }) {

    const userId = await connectionKnex('users').where({ id }).update({
      name,
      email,
      password,
      updated_at,
      id

    });

    return { id: userId };
  }

  async checkIfIsAdmin(admin) {
    const isAdmin = await connectionKnex("users").where({ admin });
    return isAdmin;
  }
}

module.exports = { UserRepository };