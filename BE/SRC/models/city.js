const { array } = require("joi")
const mongoose = require("mongoose")

const city = mongoose.Schema({
    cityID: { required: true, type: mongoose.SchemaTypes.ObjectId },
    cityName: { required: true, type: tring },
    airportList: [airportSchema],
})
const airportSchema = mongoose.Schema({
    airportID: { required: true, type: mongoose.SchemaTypes.ObjectId },
    airportName: {required: true, type: string },
    cityID: { required: true, type: mongoose.SchemaTypes.ObjectId },
})

module.exports = mongoose.model('city', airportSchema)
