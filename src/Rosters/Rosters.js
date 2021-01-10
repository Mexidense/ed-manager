import React from "react";
import { connect } from "react-redux";

const Rosters = () => (
  <div>
    <h2>Rosters</h2>
    <div className="field">
        {
          players.map(player => (
            <div className="roster">
              <div>
                <img src={player.photo} alt={player.name} />
                <button>X</button>
              </div>
              <p>{player.name}</p>
            </div>
          ))
        }
    </div>
  </div>
);

const mapStateToProps = state => ({
	rosters: state.rosters
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Rosters);