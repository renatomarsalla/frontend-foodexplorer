const { AppError } = require('../utils/AppError');



class MyOrderService {
  constructor(myOrderRepository) {
    this.myOrderRepository = myOrderRepository;
  }

  async execute({ name, quantity, price, total, image, id }) {

    const dishCreated = await this.myOrderRepository.createOrder({ name, quantity, price, total, image, id });

    return dishCreated;

  }

  async getOrder({ user_id }) {
    const order = await this.myOrderRepository.getOrder({ user_id });

    return order;
  }

  async deleteItem({ id }) {
    const order = await this.myOrderRepository.deleteItem({ id });

    return order;
  }


}

module.exports = { MyOrderService };