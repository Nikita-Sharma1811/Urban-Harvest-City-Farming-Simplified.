const mongoose = require("mongoose");

const GrowSmartSchema = new mongoose.Schema({
    
    temperature: {
        type: Number,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    gardenType: {
        type: String,
        required: true
    },

    area: {
        type: String,
        required: true
    },

    suggestedCrops: {
        type: [String],
        default: []
    }

}, {
    timestamps: true
});


module.exports = mongoose.model(
    "GrowSmart",
    GrowSmartSchema
);