
class DessertsService {
  constructor(dessertsRepository) {
    this.dessertsRepository = dessertsRepository;
  }

  async executeShow(id) {
    const dessertsShow = await this.dessertsRepository.showDesserts(id);

    return dessertsShow;
  }

  // async executeIndex(name) {
  //   const dishesIndex = await this.dishesRepository.indexDishes(name);

  //   return dishesIndex;
  // }


  async executeIndex() {
    const dessertsIndex = await this.dessertsRepository.indexDesserts();

    return dessertsIndex;
  }

}

module.exports = { DessertsService };