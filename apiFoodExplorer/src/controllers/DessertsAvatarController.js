const { DessertsAvatarRepository } = require('../repositories/DessertsAvatarRepository');
const { DessertsAvatarService } = require('../services/DessertsAvatarService')

const dessertsAvatarRepository = new DessertsAvatarRepository();
const dessertsAvatarService = new DessertsAvatarService(dessertsAvatarRepository);

class DessertsAvatarController {
  async update(request, response) {
    const { id } = request.params;
    const avatarFilename = request.file.filename;

    await dessertsAvatarService.execute({ id, avatarFilename })

    return response.json({ avatarFilename });
  }
}

module.exports = { DessertsAvatarController }