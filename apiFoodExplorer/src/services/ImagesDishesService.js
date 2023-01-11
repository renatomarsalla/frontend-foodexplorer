
class ImagesDishesService {
  constructor(imagesDishesRepository) {
    this.imagesDishesRepository = imagesDishesRepository;
  }



  async listImages(image) {
    const listImages = await this.imagesDishesRepository.listImages(image);

    return listImages;
  }

}

module.exports = { ImagesDishesService };