const mongoose = require('mongoose');

const dbConnection = async() => {
    
    try {
        await mongoose.connect('mongodb+srv://main_user:miaXgWaAyk1rSaRl@cluster0.os7pwdc.mongodb.net/hospitalDB');
        
        console.log('BD Online')

    } catch (error) {
        console.log(error)
        throw new Error ('Error al iniciar la BD')
    }
}

module.exports = {
    dbConnection
}