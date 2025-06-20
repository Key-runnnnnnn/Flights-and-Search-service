const { Flights } = require('../models/index')
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        //# is used for private methods in class
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        let priceFilter =[]
        // if (data.minPrice && data.maxPrice) {
            // Object.assign(filter, {
            //     [Op.and]: [
            //         { price: { [Op.gte]: data.minPrice } },
            //         { price: { [Op.lte]: data.maxPrice } }]
            // }); 

        // }
        if (data.minPrice) {
            // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
            priceFilter.push({ price: { [Op.gte]: data.minPrice } })
        }
        if (data.maxPrice) {
            // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } })
        }
        Object.assign(filter, {[Op.and]: priceFilter} )
        console.log(filter)
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;

/* 
{
    where: {
        arrivalAirportId: 1,
        departureAirportId: 2,
        price: {
            [Op.gte]: 4500
        }
    }
}
*/