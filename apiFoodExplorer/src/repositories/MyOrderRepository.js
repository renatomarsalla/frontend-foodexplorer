const { connectionKnex } = require('../database/knex/index');

const { DiskStorage } = require('../providers/DiskStorage')


class MyOrderRepository {


  async getUserId(id) {
    const userId = await connectionKnex("users").where({ id });

    return userId;
  }




  async createOrder({ name, quantity, price, total, image, id }) {

    const user = await connectionKnex("users").where({ id });

    const dishesId = await connectionKnex("orders").insert({
      name,
      quantity,
      price,
      total,
      image,
      user_id: user[0].id

    });

    return ({ id: dishesId });


  }

  async getOrder({ user_id }) {
    const order = await connectionKnex("orders").where({ user_id });

    console.log(order);
    // const showOrder = { ...order }

    return order;
  }

  async deleteItem({ id }) {
    const order = await connectionKnex("orders").where({ id }).delete({ id });

    // const user = await connectionKnex("orders").where({ user_id });

    return { order };
  }


}

module.exports = { MyOrderRepository }