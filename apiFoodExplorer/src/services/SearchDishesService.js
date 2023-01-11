
class SearchDishesService {
  constructor(searchDishesRepository) {
    this.searchDishesRepository = searchDishesRepository;
  }



  async executeSearch(name, ingredients) {
    const search = await this.searchDishesRepository.searchDish(name, ingredients);

    return search;
  }

}

module.exports = { SearchDishesService };