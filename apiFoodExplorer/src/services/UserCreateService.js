const { hash, compare } = require("bcrypt");

const { AppError } = require('../utils/AppError.js');

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password, isAdmin }) {
    const userExists = await this.userRepository.userExists(email);
    console.log(userExists);
    //check the length array
    if (userExists.length === 0) {
      const userCreated = await this.userRepository.create({ name, email, password, isAdmin });
      return userCreated;
    }

    //if email already exists show a internal message 
    if (userExists) {
      throw new AppError("This email already is being used, try other email");
    }

    //below is created the user
    const hashPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({ name, email, password: hashPassword });

    return userCreated;
  }

  async executeUpdate({ name, email, password, newPassword, user_id }) {
    const user = await this.userRepository.idExists(user_id);
    //checking if user exists
    if (user.length === 0) {
      throw new AppError("User does not exist");
    }

    const userEmail = await this.userRepository.userExists(email);

    if (userEmail.length && userEmail[0].id !== user[0].id) {
      throw new AppError("Email already registered");
    }

    //update name and email
    user[0].name = name ?? user[0].name;
    user[0].email = email ?? user[0].email;

    //checking if the old password was informed
    if (newPassword && !password) {
      throw new AppError("To inform the old password");
    }

    /*check if the both passwords were informed
    compare both passwords if the old password is incorrect show a message*/
    if (newPassword && password) {
      const checkOldPassword = await compare(password, user[0].password);
      if (!checkOldPassword) {
        throw new AppError("Old password incorrect");
      }
      //update password
      user[0].password = await hash(newPassword, 8);
    }

    const userUpdate = this.userRepository.updateUser({
      name: user[0].name,
      email: user[0].email,
      password: user[0].password,
      id: user[0].id

    });

    return userUpdate;
  }

}

module.exports = { UserCreateService };