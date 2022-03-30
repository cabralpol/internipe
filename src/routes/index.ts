// Main Routes
import { Router } from 'express';

import * as homeController from '../controllers/homeController';
import * as aboutController from '../controllers/aboutController';
import * as contactController from '../controllers/contactController';
import * as playerController from '../controllers/playerController';

const router = Router();

router.get('/', homeController.home);

router.get('/about', aboutController.about);

router.get('/contact', contactController.contact);

router.get('/player', playerController.selectPlayers);
router.get('/player/:id', playerController.selectPlayer);
router.post('/player', playerController.insertPlayer);
router.put('/player/:id', playerController.updatePlayer);
router.delete('/player/:id', playerController.deletePlayer);

export default router;