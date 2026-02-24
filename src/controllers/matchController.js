const Match = require('../models/Match');


exports.getMatches = async (req, res) => {
    try {
        
        const matches = await Match.find()
            .populate('homeTeam', 'name shortName')
            .populate('awayTeam', 'name shortName');
        res.json(matches);
    } catch (error) {
        res.status(500).send('Error al obtener partidos');
    }
};


exports.createMatch = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'No autorizado' });
        }

        const { homeTeam, awayTeam, date } = req.body;

        const match = new Match({
            homeTeam,
            awayTeam,
            date,
            status: 'scheduled'
        });

        await match.save();
        res.json(match);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear partido');
    }
};


exports.updateScore = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'No autorizado' });
        }

        const { homeScore, awayScore } = req.body;

        
        const match = await Match.findByIdAndUpdate(
            req.params.id, 
            { homeScore, awayScore, status: 'finished' },
            { new: true }
        );

        res.json(match);

    } catch (error) {
        res.status(500).send('Error al actualizar marcador');
    }
};