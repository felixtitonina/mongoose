// import { mongo } from "mongoose";


const schema = new mongoose.schema({

    name: String,
    email: String,
    age: Number,
    date: Date,
    isValid: Boolean,
    orders: [{
        total: String,
        email: String
    }],
    userAdmin: mongoose.Types.ObjectId,
    user: { 
        name: String,
        email: String,
    },
}, { collection: 'users' })

const User = mongoose.model('User', schema);

module.exports = User