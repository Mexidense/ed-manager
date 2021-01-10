import React from "react";
import { connect } from "react-redux";

import './Rosters.scss';

const Rosters = ({rosters, removeRoster}) => (
  <div>
    <h2>Rosters</h2>
    <div className="field">
        {
          rosters.map(roster => (
            <article className="roster" key={roster.id}>
              <div>
                <img src={roster.photo} alt={roster.name} />
                <button onClick={() => removeRoster(roster)}>X</button>
              </div>
              <p>{roster.name}</p>
            </article>
          ))
        }
    </div>
  </div>
);

const mapStateToProps = state => ({
	rosters: state.rosters
})

const mapDispatchToProps = dispatch => ({
  removeRoster(roster) {
    dispatch({
      type: 'REMOVE_ROSTER',
      roster
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Rosters);