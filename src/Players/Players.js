import React from 'react';
import { connect } from 'react-redux';

const Players = ({players}) => (
	<div>
		<h2>Players</h2>
		<div className="players-container">
			{
				players.map(player => (
					<article key={player.id}>
						<img src={player.photo} alt={player.name} />
						<h3>{player.name}</h3>
						<div>
							<button>Roster</button>
							<button>Substitute</button>
						</div>
					</article>
				))
			}
		</div>
	</div>
)

const mapStateToProps = state => ({
	players: state.players
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Players)