import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Players from './Players/Players';
import SelectedTeamPlayers from './SelectedTeamPlayers/SelectedTeamPlayers'

import "./App.scss";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>The 100 best male footballers in the world 2020</h1>
      <Players />
      <SelectedTeamPlayers />
    </main>
  </Provider>
);

export default App;
