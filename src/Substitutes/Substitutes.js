import React from "react";
import { connect } from "react-redux";

const Substitutes = ({substitutes}) => (
  <div>
    <h2>Substitutes</h2>
    <div className="field">
        {
          substitutes.map(substitute => (
            <acticle className="substitute" key={substitute.id}>
              <div>
                <img src={substitute.photo} alt={substitute.name} />
                <button>X</button>
              </div>
              <p>{substitute.name}</p>
            </acticle>
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