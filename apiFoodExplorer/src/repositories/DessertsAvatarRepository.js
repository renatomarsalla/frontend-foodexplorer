const { connectionKnex } = require('../database/knex/index');

class DessertsAvatarRepository {

  async getIdDessert(id) {
    const drink = await connectionKnex("desserts").where({ id }).first();

    return drink;
  }

  async saveAvatar(avatar, id) {
    const dessertAvatar = await connectionKnex('desserts').where({ id }).update({
      image: avatar
    });

    return dessertAvatar;
  }
}

module.exports = { DessertsAvatarRepository }