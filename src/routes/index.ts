// Main Routes
import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // Pegar as informações do banco de dados
    // Organizar as informações
    // E por último enviar para o template angine
    res.send('Olá mundo!');    
});

router.get('/contact', (req: Request, res: Response) => {
    res.send('Formulário de Contato');
});

router.get('/about', (req: Request, res: Response) => {
    res.send('Página sobre a empresa');
});

export default router;