import { Request, Response } from 'express';
import { Player } from '../models/Player';

export const home = (req: Request, res: Response) => {
    // Pegar as informações do banco de dados
    // Organizar as informações
    // E por último enviar para o template angine
    let listPlayers = Player.selectPlayers();
    let listIdades = Player.selectDefaultAge(18);
    req;
    res.status(200).render('pages/home', {

        name: 'Cabral',
        age: 90,
        players: listPlayers,
        idades: listIdades

    }); // Basta o nome do view sem .mustache   
}