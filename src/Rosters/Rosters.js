import React from "react";
import { connect } from "react-redux";

const Rosters = ({rosters}) => (
  <div>
    <h2>Rosters</h2>
    <div className="field">
        {
          rosters.map(roster => (
            <div className="roster">
              <div>
                <img src={roster.photo} alt={roster.name} />
                <button>X</button>
              </div>
              <p>{roster.name}</p>
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