const Mongoose = require("mongoose")
const remoteDB = "mongodb+srv://LuisJaar:!_@RF(i%%jTb7g3@cluster0.f9cwp.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    await Mongoose.connect(remoteDB)
    .then(client => {
        console.log("Mongo connection Success")
    })
}
module.exports = connectDB