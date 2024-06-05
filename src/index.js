const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

// const cityRepository = require('./repository/city-repository')

const SetupAndStartServer = async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, async()=>{
        console.log(`Server is running on port ${PORT}`); 
        // const cityRepo = new cityRepository();
        // // await cityRepo.createCity({name:'Mumbai'});
        // // await cityRepo.createCity({name:'Delhi'});
        // // await cityRepo.createCity({name:'Bangalore'});
        // // 
        // await cityRepo.deleteCity(8);
    }); 
}   

SetupAndStartServer();