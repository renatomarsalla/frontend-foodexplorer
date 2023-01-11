const { SessionsRepository } = require('../repositories/SessionsRepository.js');

const { SessionsService } = require('../services/SessionsService')

const { jwtToken } = require('../configs/auth.js');
const { sign } = require('jsonwebtoken');


class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const sessionsRepository = new SessionsRepository();

    const sessionsService = new SessionsService(sessionsRepository);

    await sessionsService.execute({ email, password })

    const user = await sessionsService.execute({ email, password });

    return response.json(user);
  }
}

module.exports = { SessionsController }