const { connectionKnex } = require('../database/knex/index');

class ImagesDishesRepository {


  async listImages(image) {
    const images = await connectionKnex('dishes').where({ image });

    console.log(images);

    return images;
  }

}

module.exports = { ImagesDishesRepository };