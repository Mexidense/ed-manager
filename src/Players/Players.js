import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addRoster, addSubstitute }) => (
  <div>
    <h2>Players</h2>
    <div className="players-container">
      { players.map((player) => (
          <article key={player.id}>
            <img src={player.photo} alt={player.name} />
            <h3>{player.name}</h3>
            <div>
              <button onClick={() => addRoster(player)}>Roster</button>
              <button onClick={() => addSubstitute(player)}>Substitute</button>
            </div>
          </article>
        ))
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  addRoster(player) {
    dispatch({
      type: "ADD_ROSTER",
      player,
    });
  },

  addSubstitute(player) {
    dispatch({
      type: "ADD_SUBSTITUTE",
      player
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
