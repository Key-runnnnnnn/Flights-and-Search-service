const { City } = require('../models/index')

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId
        }
      });
      return true
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data ) {  //data ->{name:'Mumbai'}
    try {
      const city = await City.update(data,{
        where: {
          id: cityId
        }
      });
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId)
    } catch (error) {

    }
  }
}

module.exports = CityRepository;