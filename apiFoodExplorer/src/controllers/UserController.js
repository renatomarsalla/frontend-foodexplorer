const { UserRepository } = require("../repositories/UserRepository.js");
const { UserCreateService } = require("../services/UserCreateService.js");
const { hash } = require("bcrypt");

class UserController {
  async create(request, response) {
    // const { name, email, password } = request.body;
    const { name, email, password, isAdmin } = request.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    const hashPassword = await hash(password, 8);

    // await userCreateService.execute({ name, email, password: hashPassword });

    await userCreateService.execute({ name, email, password: hashPassword, isAdmin });

    return response.json({ name, email, password: hashPassword, isAdmin });
  }

  async updateUser(request, response) {
    const { name, email, password, newPassword } = request.body;
    const user_id = request.user.id;
    // const { id } = request.params;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.executeUpdate({ name, email, password, newPassword, user_id });
    // await userCreateService.executeUpdate({ name, email, password, newPassword, id });

    return response.json({ name, email, password, newPassword, user_id });
    // return response.json({ name, email, password, newPassword, id });

  }
}

module.exports = { UserController };