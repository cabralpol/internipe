import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    // Pegar as informações do banco de dados
    // Organizar as informações
    // E por último enviar para o template angine
    req;
    res.status(200).render('pages/home', {

        name: 'Cabral',
        age: 90,
        products: [
            { title: 'Produto X', price: 10 },
            { title: 'Produto Y', price: 20 },
            { title: 'Produto Z', price: 30 }
        ]

    }); // Basta o nome do view sem .mustache   
}