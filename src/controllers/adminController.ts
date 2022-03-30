import { Request, Response } from 'express';

export const admin = (req: Request, res: Response) => {
    req;
    res.status(200).render('pages/admin', {});
}