const mongoose = require('mongoose');


const flightsSchema = new mongoose.Schema([{
    departure: String,
    arival: String,
    date:String,
}])

const Flight = mongoose.model('Flight',flightsSchema);

module.exports = Flight;