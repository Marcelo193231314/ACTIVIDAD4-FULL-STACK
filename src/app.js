const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes); 

app.get('/', (req, res) => {
    res.send('API de LigaManager funcionando correctamente ');
});

module.exports = app;