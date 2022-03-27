/* Server */

/* Import routes */

import express, {Request, Response} from 'express';
import path from 'path';
import mainRoutes from './routes/index';
import panelRoutes from './routes/panel';

/* Server extension */
const server = express();

/* Using routes */

// Create static route to public folder 
server.use(express.static(path.join(__dirname, '../public')));
// Create main router
server.use('/', mainRoutes);
//Create panel router
server.use('/panel', panelRoutes);
// If no page is found
server.use((req: Request, res: Response) => {
    req.params;
    res.status(404).send('Página não encontrada!');
});

/* Server port */

server.listen(80);