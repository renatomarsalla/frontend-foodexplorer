const { DrinksAvatarRepository } = require('../repositories/DrinksAvatarRepository');
const { DrinksAvatarService } = require('../services/DrinksAvatarService')

const drinksAvatarRepository = new DrinksAvatarRepository();
const drinksAvatarService = new DrinksAvatarService(drinksAvatarRepository);

class DrinksAvatarController {
  async update(request, response) {
    const { id } = request.params;
    const avatarFilename = request.file.filename;

    await drinksAvatarService.execute({ id, avatarFilename })

    return response.json({ avatarFilename });
  }
}

module.exports = { DrinksAvatarController }