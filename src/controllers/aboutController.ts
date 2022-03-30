import { Request, Response } from 'express';

export const about = (req: Request, res: Response) => {
    req;
    res.status(200).render('pages/about', {});
}