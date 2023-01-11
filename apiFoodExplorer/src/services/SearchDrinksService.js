
class SearchDrinksService {
  constructor(searchDrinksRepository) {
    this.searchDrinksRepository = searchDrinksRepository;
  }



  async executeSearch(name, ingredients) {
    const search = await this.searchDrinksRepository.searchDrink(name, ingredients);

    return search;
  }

}

module.exports = { SearchDrinksService };