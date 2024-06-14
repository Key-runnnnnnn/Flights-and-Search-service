const { AirportService } = require('../services/index')

const airportService = new AirportService();
const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            err: {},
            message: 'Successfully created a new airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create new airport',
            err: error
        });
    }
}

module.exports = {
  create
}