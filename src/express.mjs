import express from 'express';
import path from 'path';
import morgan from 'morgan'
import { fileURLToPath } from 'url';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { getMac } from './controllers/macController.mjs'
import { getUser, insertResult, loadHistory } from './controllers/userController.mjs';
import { registerUser, login } from './auth/users.mjs';

const prisma = new PrismaClient();
const app = express();
const url = '/:action';
const port = 40000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC = path.join(__dirname, '../public/front/');
const USERS_FILE_PATH = path.join(__dirname, '../src/database/seeders.json'); 

app.use(cors());
app.use(express.static(path.join(__dirname, '../public/front/')));
app.use(morgan('tiny'));
app.use(express.json());

app.get('/data/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users); 
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.get('/data/macs', getMac);

app.get('/data/users/:id', getUser);

app.post('/data/users/:id/history', insertResult );

app.get('/data/users/:id/history', loadHistory );


app.get(url, (req, res) => {
    const { action } = req.params;

    switch (action) {
        case "login":
            res.sendFile(`${PUBLIC}html/login.html`);
            break;
        case "cadastro":
            res.sendFile(`${PUBLIC}html/cadastro.html`);
            break;
        case "sobre":
            res.sendFile(`${PUBLIC}html/sobre.html`);
            break;
        case "contato":
            res.sendFile(`${PUBLIC}html/contato.html`);
            break;
        case "home":
            res.sendFile(`${PUBLIC}html/index.html`);
            break;
        default:
            res.status(404).send('Página não encontrada');
            break;         
    }
});

app.post('/data/users', registerUser );
app.post('/login', login );

app.listen(port, () => {
    console.log('Servidor rodando na porta:', port);
});
