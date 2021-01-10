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
        {
            id: 'e66f5644-eff0-42ec-bee9-d35007331c2b',
            name: 'Robert Lewandowski',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robert_Lewandowski%2C_FC_Bayern_M%C3%BCnchen_%28by_Sven_Mandel%2C_2019-05-27%29_01.jpg/405px-Robert_Lewandowski%2C_FC_Bayern_M%C3%BCnchen_%28by_Sven_Mandel%2C_2019-05-27%29_01.jpg'
        },
        {
            id: 'a2e7944d-cda1-4452-a09e-0e27fea23081',
            name: 'Cristiano Ronaldo',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/CR7_%28JUV-LOK%29.jpg'
        },
        {
            id: '7cb82c7c-d874-402e-9bfe-7b3394391d1b',
            name: 'Sadio Mané',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sadio_Man%C3%A9_Senegal.jpg/368px-Sadio_Man%C3%A9_Senegal.jpg'
        },
        {
            id: '26488bd0-dc92-4eb9-bc48-f02866cfdf1a',
            name: 'Kylian Mbappé',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/330px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg'
        },
        {
            id: '346a2944-d912-4e8e-8f1b-0f941c5b1582',
            name: 'Mohamed Salah',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mohamed_Salah_2018.jpg/368px-Mohamed_Salah_2018.jpg'
        },
        {
            id: 'c010df33-37e5-4443-8dd8-f0e7bdf9d97d',
            name: 'Neymar',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/338px-Bra-Cos_%281%29.jpg'
        },
        {
            id: '8f107c5e-456d-4d7a-9653-3ca3d8427c2e',
            name: 'Sergio Ramos',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Russia-Spain_2017_%286%29.jpg/405px-Russia-Spain_2017_%286%29.jpg'
        },
        {
            id: '64491082-6c8e-4b75-a271-be74babbd6b1',
            name: 'Thomas Müller',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2019147201815_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_2718_-_B70I1018_%28cropped%29.jpg/368px-2019147201815_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_2718_-_B70I1018_%28cropped%29.jpg'
        },
        {
            id: '0034a574-872c-410c-953a-7fe5f974bfcf',
            name: 'Manuel Neuer',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg/330px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg'
        },
        {
            id: '5ff7ab9c-043f-4575-8f36-3cade3351a0f',
            name: 'Thiago',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/20190428_DFL_1._Bundesliga_FCN_-_FCB_DSC_7551.jpg/368px-20190428_DFL_1._Bundesliga_FCN_-_FCB_DSC_7551.jpg'
        },
        {
            id: '2d06f738-68f5-41f3-b009-57f149d440f1',
            name: 'Romelu Lukaku',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Romelu_Lukaku_with_Belgium_before_game_v_Brazil%2C_6_July_2018.jpg.png'
        },
        {
            id: '36db4c02-c4d8-43f9-bb50-cbc2608d3813',
            name: 'Harry Kane',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Harry_Kane_in_Russia_2.jpg/368px-Harry_Kane_in_Russia_2.jpg'
        },
        {
            id: '78db4e7a-57fa-4b37-8b6c-479f3aee6ee8',
            name: 'Son Heung-min',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Team_Korea_Russia_WorldCup_02_%28cropped%29.png/368px-Team_Korea_Russia_WorldCup_02_%28cropped%29.png'
        },
        {
            id: 'beca4b4d-15dd-4340-bfd7-1fd581ec2336',
            name: 'Zlatan Ibrahimović',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg'
        },
        {
            id: '1736f9cc-e9e1-49e6-8a33-275a0e9ea6a6',
            name: 'Toni Kroos',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/CSKA-RM18_%2824%29.jpg/368px-CSKA-RM18_%2824%29.jpg'
        }
    ],
    rosters: [],
    substitutes: []
}

const managerReducer = (state = initialState, action) => {
    if (action.type === 'ADD_ROSTER') {
        return {
            ...state,
            rosters: state.rosters.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    }

    if (action.type === 'ADD_SUBSTITUTE') {
        return {
            ...state,
            substitutes: state.substitutes.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    }

    if (action.type === 'REMOVE_ROSTER') {
        return {
            ...state,
            rosters: state.rosters.filter(roster => roster.id !== action.roster.id),
            players: state.players.concat(action.roster)
        }
    }

    if (action.type === 'REMOVE_SUBSTITUTE') {
        return {
            ...state,
            substitutes: state.substitutes.filter(substitute => substitute.id !== action.substitute.id),
            players: state.players.concat(action.substitute)
        }
    }

    return state;
}

export default createStore(managerReducer);