const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      messege: "City created successfully",
      err: {}
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      messege: "Something went wrong.....not able to create a city",
      err: error
    })
  }
}

// Creat multiple cities in one go

const createMany = async (req,res)=>{
  try{
    const cities = await cityService.createManyCities(req.body);
    return res.status(201).json({
      data: cities,
      success: true,
      messege: "Cities created successfully",
      err: {}
    });
  } 
  catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      messege: "Something went wrong.....not able to create cities",
      err: error
    })
  }
}

// DELETE - /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      messege: "City deleted successfully",
      err: {}
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      messege: "Something went wrong.....not able to delete a city",
      err: error
    })
  }
}

// GET - /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City fetched successfully",
      err: {}
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      messege: "Something went wrong.....not able to get the city",
      err: error
    })
  }
}

// patch ->  /city/:id
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      messege: "City fetched successfully",
      err: {}
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      messege: "Something went wrong.....not able to update the city",
      err: error
    })
  }
}

const getAll= async (req,res)=>{
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      messege: "Cities fetched successfully",
      err: {}
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      data: {},
      success: false,
      messege: "Something went wrong.....not able to fetch all cities",
      err: error
    })
  }
}

module.exports = {
  create,
  createMany,
  destroy,
  get,
  update,
  getAll
}