const Team = require('../models/Team');


exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};


exports.createTeam = async (req, res) => {
    try {
        
        if (req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'No tienes permisos de administrador' });
        }

        const { name, shortName, stadium, logo } = req.body;

        
        let team = new Team({
            name,
            shortName,
            stadium,
            logo
        });

        await team.save();
        res.json(team);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar equipo');
    }
};


exports.deleteTeam = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'No tienes permisos' });
        }
        
        await Team.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Equipo eliminado' });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};