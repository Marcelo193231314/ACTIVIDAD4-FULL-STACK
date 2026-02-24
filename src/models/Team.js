const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    shortName: { 
        type: String, 
        required: true,
        uppercase: true,
        maxLength: 5  
    },
    stadium: {
        type: String,
        required: true
    },
    logo: { 
        type: String,
        default: 'https://via.placeholder.com/150'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', TeamSchema);