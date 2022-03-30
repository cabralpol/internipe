// Admin Routes
import {Router, Request, Response} from 'express';

import * as adminController from '../controllers/adminController';

const router = Router();

router.get('/', adminController.admin);

router.get('/usersView', (req: Request, res: Response) => {
    req;
    res.send('Ver Usuários Cadastrados');
});

export default router;