import React from "react";
import { connect } from "react-redux";

const Substitutes = ({players}) => (
  <div>
    <h2>Substitutes</h2>
    <div className="field">
        {
          players.map(player => (
            <div className="substitute">
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
	substitutes: state.substitutes
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);