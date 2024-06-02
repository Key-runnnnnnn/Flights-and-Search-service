const express = require('express'); 
const {PORT} = require('./config/serverConfig')

const SetupAndStartServer = async ()=>{
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`); 
    }); 
}

SetupAndStartServer();