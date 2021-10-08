import React, {Component} from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
	handleLogin = (e) => {
		e.preventDefault()
		const { dispatch } = this.props

		dispatch(setAuthedUser(e.target.value))
	}
	render() {
		const { users } = this.props

		return (
			<div className='center'>
				<h2>Login</h2>
				{this.props.usersIds.map((id) => (
						<div key={id} className='center'>
							<li className='tweet'>
								<img
								src={users[id].avatarURL}
								alt={`Avatar of ${users[id]}`}
								className='avatar'
								/>
								<h3>{users[id].name}</h3>
								<button className='btn' value={id} onClick={this.handleLogin}>Login</button>
							</li>
						</div>
					))}
			</div>
		)
	}
}

function mapStateToProps ({ users }) {
	return {
		usersIds: Object.keys(users),
		users
	}
}

export default connect(mapStateToProps)(Login)