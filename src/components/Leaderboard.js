import React, {Component} from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
	render() {
		const { users } = this.props

		return (
			<div>
				<ul className='dashboard-list'>
					{this.props.usersIds.map((id) => (
						<div key={id} className='tweet'>
							<li>
							<h3>{users[id].name}</h3>
							<img
								src={users[id].avatarURL}
								alt={`Avatar of ${users[id]}`}
								className='avatar'
							/>
							<p>Number of questions answered: {Object.keys(users[id].answers).length}</p>
							<p>Number of questions asked: {users[id].questions.length}</p>
							</li>
						</div>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({ users }) {
	console.log("from leaderboard: ", users)
	return {
		usersIds: Object.keys(users)
			.sort((a,b) => ((Object.keys(users[b].answers).length+users[b].questions.length) - (Object.keys(users[a].answers).length+users[a].questions.length))),
		users,
	}
}

export default connect(mapStateToProps)(Leaderboard)

//.sort((a,b) => users[b].questions.length - users[a].questions.length)