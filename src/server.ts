/* Server */

/* Import routes */

import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import adminRoutes from './routes/admin';

/* Create environment variable */
dotenv.config();
/* Server extension */
const server = express();
/* Configuração do Mustache */
server.set('view engine', 'mustache');
// Informa para o Express onde estão os arquivos html do projeto
server.set('views', path.join(__dirname, 'views'));
// Use Mustache here
server.engine('mustache', mustache());

/* Using routes */

// Create static route to public folder 
server.use(express.static(path.join(__dirname, '../public')));

/* Good practice to encode the url */
server.use(express.json())
// Habilita para pegar dados via post no corpo da requisição dentro da rota
server.use(express.urlencoded({ extended: true }))

// Create main router
server.use('/', mainRoutes);
//Create admin router
server.use('/admin', adminRoutes);
// If no page is found
server.use((req: Request, res: Response) => {
    req.params;
    res.status(404).send('Página não encontrada!');
});

/* Server port */

server.listen(process.env.PORT);