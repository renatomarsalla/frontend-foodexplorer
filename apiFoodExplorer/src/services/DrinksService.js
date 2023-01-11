
class DrinksService {
  constructor(drinksRepository) {
    this.drinksRepository = drinksRepository;
  }

  async executeShow(id) {
    const drinksShow = await this.drinksRepository.showDrinks(id);

    return drinksShow;
  }

  // async executeIndex(name) {
  //   const drinksIndex = await this.dishesRepository.indexDishes(name);

  //   return dishesIndex;
  // }


  async executeIndex() {
    const drinksIndex = await this.drinksRepository.indexDrinks();

    return drinksIndex;
  }

}

module.exports = { DrinksService };