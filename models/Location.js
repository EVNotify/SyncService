const mongoose = require('mongoose');
 
const options = {
    id: false,
    timestamps: true,
    toObject: { getters: true },
    versionKey: false,
};
 
const LocationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: false,
        default: null
    },
    longitude: {
        type: Number,
        required: false,
        default: null
    },
    altitude: {
        type: Number,
        required: false,
        default: null
    },
    accuracy: {
        type: Number,
        required: false,
        default: null
    },
    speed: {
        type: Number,
        required: false,
        default: null
    }
}, options);
 
module.exports = LocationSchema;