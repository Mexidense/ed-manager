import { createStore } from 'redux';

const initialState = {
    players: [
        {
            id: '3922db8f-5ec9-443e-8eae-135fcc16c6ef',
            name: 'Leonel Messi',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Messi_vs_Nigeria_2018.jpg/250px-Messi_vs_Nigeria_2018.jpg',
        },
        {
            id: '8da7a5de-7ed4-4d74-af8a-d0fbf0ff0263',
            name: 'Benzema',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Karim_Benzema_2018.jpg/250px-Karim_Benzema_2018.jpg',
        },
        {
            id: 'ded787d8-2e2a-4825-a4a2-e021bfcc2d1d',
            name: 'Luis Suarez',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Luis_Su%C3%A1rez_2018.jpg/220px-Luis_Su%C3%A1rez_2018.jpg',
        },
    ],
    rosters: [],
    substitutes: []
}

const managerReducer = (state = initialState, action) => {
    return state;
}

export default createStore(managerReducer);