import { Request, Response } from 'express';

export const selectPlayers = (req: Request, res: Response) => {
    req;    
    res.status(200).send(`<h1>Seleciona todos os jogadores</h1>`);
};

export const selectPlayer = (req: Request, res: Response) => {
    let id = req.params.id;
    res.status(200).send(`<h1>Seleciona o jogador de id = ${id}!</h1>`);
};

export const insertPlayer = (req: Request, res: Response) => {
    req;    
    res.status(200).send(`<h1>Insere um jogador</h1>`);
};

export const updatePlayer = (req: Request, res: Response) => {
    let id = req.params.id;
    res.status(201).send(`<h1>Atualiza o jogador de id = ${id}!</h1>`);
};

export const deletePlayer = (req: Request, res: Response) => {
    let id = req.params.id;
    res.status(201).send(`<h1>Deleta o jogador de id = ${id}!</h1>`);
};