import React, {Component} from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
	state = {
		toHome: false,
	}

	handleLogin = (e) => {
		e.preventDefault()
		const { id, dispatch } = this.props
		console.log('id is :', e.target.value)
		dispatch(setAuthedUser(e.target.value))

		this.setState(() => ({
			toHome: true,
		}))
	}

	render() {
		const { users, toHome } = this.props
		console.log(toHome)
		if (toHome === true) {
			return <Redirect to='/'/>
		}
		console.log(window.location.pathname)
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
								<button class='btn' value={id} onClick={this.handleLogin}>Login</button>
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