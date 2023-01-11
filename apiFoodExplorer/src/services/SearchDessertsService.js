
class SearchDessertsService {
  constructor(searchDessertsRepository) {
    this.searchDessertsRepository = searchDessertsRepository;
  }



  async executeSearch(name, ingredients) {
    const search = await this.searchDessertsRepository.searchDessert(name, ingredients);

    return search;
  }

}

module.exports = { SearchDessertsService };