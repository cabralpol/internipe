type Player = {
    id: number,
    name: string,
    email: string,
    password: string,
    age: number
};

const data: Player[] = [
    {id: 1, name: 'Player 01', email: 'player1@hotmail.com', password: '123', age: 10},
    {id: 2, name: 'Player 02', email: 'player2@hotmail.com', password: '123', age: 20},
    {id: 3, name: 'Player 03', email: 'player2@hotmail.com', password: '123', age: 30}
];

export const Player = {
    selectPlayers: (): Player[] => {
        return data;
    },
    selectDefaultAge: (age: number): Player[] => {
        return data.filter(item => item.age >= age);        
    }
};