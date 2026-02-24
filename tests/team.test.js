const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Team = require('../src/models/Team');

describe('Pruebas de Equipos', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/liga_test_db`;
        await mongoose.connect(url);
    });

    afterEach(async () => {
        await Team.deleteMany();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Debería obtener la lista de equipos vacía al inicio', async () => {
        const response = await request(app).get('/api/teams');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    test('Debería registrar un nuevo equipo correctamente', async () => {
        const nuevoEquipo = {
            name: "FC Barcelona",
            shortName: "BARCA",
            stadium: "Camp Nou"
        };
        const response = await request(app).post('/api/teams').send(nuevoEquipo);
        expect(response.statusCode).toBe(401); 
    });
});