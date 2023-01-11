const { IngredientsAvatarRepository } = require('../repositories/IngredientsAvatarRepository');
const { IngredientsService } = require('../services/IngredientsService')

const ingredientsAvatarRepository = new IngredientsAvatarRepository();
const ingredientsService = new IngredientsService(ingredientsAvatarRepository);

class IngredientsAvatarController {
  async update(request, response) {
    const { id } = request.params;
    const avatarFilename = request.file.filename;

    await ingredientsService.execute({ id, avatarFilename })

    return response.json({ avatarFilename });
  }
}

module.exports = { IngredientsAvatarController }