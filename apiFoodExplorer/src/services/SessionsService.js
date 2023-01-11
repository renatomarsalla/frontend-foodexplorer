const { AppError } = require('../utils/AppError.js');
const { compare } = require('bcrypt');
const { jwtToken } = require('../configs/auth.js');
const { sign } = require('jsonwebtoken');

class SessionsService {
  constructor(sessionsRepository) {
    this.sessionsRepository = sessionsRepository;
  }

  async execute({ email, password }) {
    const userExists = await this.sessionsRepository.userExists(email);

    //check if the user exists
    if (!userExists) {
      throw new AppError("Email e/ou senha incorreta", 401);
    }

    // verify if the current password is equal the password that is in database 
    const passwordMatched = await compare(password, userExists.password);

    if (!passwordMatched) {
      throw new AppError("Email e/ou senha incorreta", 401);
    }

    // here is created the jsonwebtoken
    const { secret, expiresIn } = jwtToken.jwt;
    const token = sign({}, secret, {
      subject: String(userExists.id),
      expiresIn
    });

    // console.log(userExists);
    return { userExists, token };

  }
}

module.exports = { SessionsService }