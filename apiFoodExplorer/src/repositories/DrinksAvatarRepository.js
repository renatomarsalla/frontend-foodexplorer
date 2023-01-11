const { connectionKnex } = require('../database/knex/index');

class DrinksAvatarRepository {

  async getIdDish(id) {
    const drink = await connectionKnex("drinks").where({ id }).first();

    return drink;
  }

  async saveAvatar(avatar, id) {
    const drinkAvatar = await connectionKnex('drinks').where({ id }).update({
      image: avatar
    });

    return drinkAvatar;
  }
}

module.exports = { DrinksAvatarRepository }