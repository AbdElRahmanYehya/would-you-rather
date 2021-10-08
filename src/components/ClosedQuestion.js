import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class ClosedQuestion extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const {id } = this.props
		this.props.history.push(`/questions/${id}`)
	}
	render() {
		const { question, users } = this.props
		const {
			author, optionOne,
		} = question

		return (
			<div className='tweet'>
				<form onSubmit={this.handleSubmit}>
					<img
						src={users[author].avatarURL}
						alt={`Avatar of ${author}`}
						className='avatar'
					/>
					<p>{optionOne.text}</p>
					<button className='btn' type='submit'>
						See poll
					</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
	const question = questions[id]
	//console.log("hi :", question.optionOne)
	return {
		authedUser,
		question: question,
		users
	}
}

export default withRouter(connect(mapStateToProps)(ClosedQuestion))