import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Players from './Players/Players';
import SelectedTeamPlayers from './SelectedTeamPlayers/SelectedTeamPlayers'

import "./App.scss";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>ED Manager</h1>
      <Players />
      <SelectedTeamPlayers />
    </main>
  </Provider>
);

export default App;
