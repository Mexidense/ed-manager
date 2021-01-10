import React from "react";
import { connect } from "react-redux";

const Substitutes = ({substitutes, removeSubstitute}) => (
  <div>
    <h2>Substitutes</h2>
    <div className="field">
        {
          substitutes.map(substitute => (
            <article className="substitute" key={substitute.id}>
              <div>
                <img src={substitute.photo} alt={substitute.name} />
                <button onClick={() => removeSubstitute(substitute)}>X</button>
              </div>
              <p>{substitute.name}</p>
            </article>
          ))
        }
    </div>
  </div>
);

const mapStateToProps = state => ({
	substitutes: state.substitutes
})

const mapDispatchToProps = dispatch => ({
  removeSubstitute(substitute) {
    dispatch({
      type: 'REMOVE_SUBSTITUTE',
      substitute
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);