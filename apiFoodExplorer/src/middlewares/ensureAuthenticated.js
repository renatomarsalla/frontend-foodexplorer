const { verify } = require('jsonwebtoken');
const { AppError } = require('../utils/AppError.js');
const { jwtToken } = require('../configs/auth.js');

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token não informado', 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    // create an alias user_id to sub
    const { sub: user_id } = verify(token, jwtToken.jwt.secret);

    // create a property called user inside request
    request.user = {
      id: Number(user_id)
    };
    return next();
  } catch (error) {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = { ensureAuthenticated };