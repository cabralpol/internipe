import { Request, Response } from 'express';

export const panel = (req: Request, res: Response) => {
    req;
    res.status(200).render('pages/panel', {});
}