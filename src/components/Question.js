import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formatQuestion } from '../utils/_DATA'

class Tweet extends Component {
	render() {
		const { question, users } = this.props
		// mfrod nbdl question el t7t b el format da
		// formatQuestion(question.optionOne, question.optionTwo, question.author)
		const {
			author, name, avatarURL, timestamp, optionOne, optionTwo
		} = question
		//console.log(name)
		return (
			<div className='tweet'>
				<img
						src={users[author].avatarURL}
						alt={`Avatar of ${author}`}
						className='avatar'
					/>
				<p>{optionOne.text}</p>
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

export default connect(mapStateToProps)(Tweet)