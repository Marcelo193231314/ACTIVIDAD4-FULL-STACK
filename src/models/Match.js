const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    homeTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    homeScore: { type: Number, default: 0 },
    awayScore: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['scheduled', 'finished'],
        default: 'scheduled'
    }
}, { timestamps: true });

module.exports = mongoose.model('Match', MatchSchema);