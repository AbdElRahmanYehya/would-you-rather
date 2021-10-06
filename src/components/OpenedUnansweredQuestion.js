import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import ClosedUnansweredQuestion from './ClosedUnansweredQuestion'

class OpenedUnansweredQuestion extends Component {
	render() {
	const { question } = this.props
	// mfrod nbdl question el t7t b el format da
	// formatQuestion(question.optionOne, question.optionTwo, question.author)
	const {
		author, name, avatarURL, timestamp, optionOne, optionTwo
	} = question
	console.log(this.props)
	const {id} = this.props
		return (
			<div className='tweet'>
				<form onSubmit={this.handleSubmit}>
					<img
						src={avatarURL}
						alt={`Avatar of ${author}`}
						className='avatar'
					/>
					<input type="radio" id="firstOption" name="chooseAnswer" value="firstOption"/>
					<label>{optionOne.text}</label>
					<input type="radio" id="secondOption" name="chooseAnswer" value="secondOption"/>
					<label>{optionTwo.text}</label>
					<button className='btn' type='submit'>
						See poll
					</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, questions, users}, props) {
	const {id} = props.match.params
	const question = questions[id]
	return {
		authedUser,
		question: question,
		id,
	}
}

export default connect(mapStateToProps)(OpenedUnansweredQuestion)