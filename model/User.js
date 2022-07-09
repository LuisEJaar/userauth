// We set up our mongoose schema here (kinda like file structure, but for items in our database)

const Mongoose = require("mongoose")
const UserScheme = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        requried: true,
        minlength: 6,
    }, 

    role: {
        type: String,
        default: "Basic", 
        required: true,
    }
})

const User = Mongoose.model()
module.export = User