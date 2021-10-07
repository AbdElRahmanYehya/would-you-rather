import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import ClosedUnansweredQuestion from './ClosedUnansweredQuestion'
import { handleSaveAnswer } from '../actions/questions'

class OpenedUnansweredQuestion extends Component {
	handleSave = (e) => {
		e.preventDefault()
		const answer =  e.target.value
		console.log("value: ", answer)
		const {dispatch, question, authedUser} = this.props
		console.log("from opened unans: ",question.id)
		dispatch(handleSaveAnswer({
			qid: question.id,
			answer: answer,
			authedUser
		}))
	}
	render() {
	const { authedUser, question, users, id  } = this.props
	// mfrod nbdl question el t7t b el format da
	// formatQuestion(question.optionOne, question.optionTwo, question.author)
	const {
		author, name, avatarURL, timestamp, optionOne, optionTwo
	} = question
	console.log(question['optionOne']['votes'])
	console.log(question['optionOne']['votes'].includes(authedUser))
		return (
			<div className='tweet'>
				<form>
					<h3>Would You Rather</h3>
					<img
						src={users[author].avatarURL}
						alt={`Avatar of ${author}`}
						className='avatar'
					/>
					<button className='btn' onClick={this.handleSave} value='optionOne'>
						{optionOne.text}
					</button>
					<button className='btn' onClick={this.handleSave} value='optionTwo'>
						{optionTwo.text}
					</button>
				</form>
				{
					question['optionOne']['votes'].includes(authedUser)
					?<div>You choosed option 1</div>
					:question['optionTwo']['votes'].includes(authedUser)
					?<div>You choosed option 2</div>
					:<div></div>
				}
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
		users,
	}
}

export default connect(mapStateToProps)(OpenedUnansweredQuestion)

//question['optionOne']['votes'].inclueds(authedUser)