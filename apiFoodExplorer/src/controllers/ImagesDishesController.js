
const { ImagesDishesRepository } = require('../repositories/ImagesDishesRepository');
const { ImagesDishesService } = require('../services/ImagesDishesService');


class ImagesDishesController {



  async showDishesImages(request, response) {
    const { image } = request.body;

    const imagesDishesRepository = new ImagesDishesRepository();
    const imagesDishesService = new ImagesDishesService(imagesDishesRepository);


    imagesDishesService.listImages(image);
    return response.json();
  }


}

module.exports = { ImagesDishesController }