// Panel Routes
import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Home do Painel Administrativo');
});

router.get('/usersView', (req: Request, res: Response) => {
    res.send('Ver Usuários Cadastrados');
});

export default router;