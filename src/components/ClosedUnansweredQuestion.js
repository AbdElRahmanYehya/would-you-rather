import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { withRouter } from 'react-router-dom'

class ClosedUnansweredQuestion extends Component {
	handleSubmit = (e) => {
		e.preventDefault()

		const {dispatch, id} = this.props
		console.log('id is :', id)
		this.props.history.push(`/questions/${id}`)
	}

	render() {
		const { question } = this.props
		// mfrod nbdl question el t7t b el format da
		// formatQuestion(question.optionOne, question.optionTwo, question.author)
		const {
			author, name, avatarURL, timestamp, optionOne, optionTwo
		} = question

		return (
			<div className='tweet'>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<img
						src={avatarURL}
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
		question: question
	}
}

export default withRouter(connect(mapStateToProps)(ClosedUnansweredQuestion))