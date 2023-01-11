const { MyOrderRepository } = require('../repositories/MyOrderRepository');
const { MyOrderService } = require('../services/MyOrderService');

const { connectionKnex } = require('../database/knex/index');


class MyOrderController {
  async createOrder(request, response) {
    const { name, quantity, price, total, image, } = request.body;

    const { id } = request.params

    const myOrderRepository = new MyOrderRepository();
    const myOrderService = new MyOrderService(myOrderRepository);

    await myOrderService.execute({ name, quantity, price, total, image, id })

    return response.json({ id });

  }

  async getOrder(request, response) {
    const { user_id } = request.params;


    const myOrderRepository = new MyOrderRepository();
    const myOrderService = new MyOrderService(myOrderRepository);

    await myOrderService.getOrder({ user_id })

    const order = await myOrderService.getOrder({ user_id })

    return response.json(order)
  }

  async deleteItem(request, response) {
    const { id } = request.params;

    const myOrderRepository = new MyOrderRepository();
    const myOrderService = new MyOrderService(myOrderRepository);

    await myOrderService.deleteItem({ id })

    const order = await myOrderService.deleteItem({ id })

    return response.json(id)
  }




}

module.exports = { MyOrderController };