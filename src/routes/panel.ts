// Panel Routes
import {Router, Request, Response} from 'express';

import * as panelController from '../controllers/panelController';

const router = Router();

router.get('/', panelController.panel);

router.get('/usersView', (req: Request, res: Response) => {
    req;
    res.send('Ver Usuários Cadastrados');
});

export default router;