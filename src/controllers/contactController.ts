import { Request, Response } from 'express';

export const contact = (req: Request, res: Response) => {
    req;
    res.status(200).render('pages/contact', {});
}