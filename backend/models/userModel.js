const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is mandatory!"],
        maxlength: [25, "Name should not have more than 25 characters."],
        trim:true,
    },
    email:{
        type: String,
        required: [true, "Email is mandatory!"],
        unique: true,
        trim:true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    endDate: {
        type: Date,
        default: Date.now()
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})
userSchema.plugin(mongoosePaginate)
module.exports = mongoose.model("user",userSchema);