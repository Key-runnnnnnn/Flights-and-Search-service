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

  async updateCity(cityId, data) {  //data ->{name:'Mumbai'}
    try {

      //the below commented approach also works but will not returns the updated object

      // if we r using pgSQL then only the returning true is working else not

      // const city = await City.update(data,{
      //   where: {
      //     id: cityId
      //   },
      // });
      const city = await City.findByPk(cityId)
      city.name = data.name
      await city.save()
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId)
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;