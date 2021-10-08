import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class OpenedQuestion extends Component {
	handleSave = (e) => {
		e.preventDefault()
		const answer =  e.target.value
		const {dispatch, question, authedUser} = this.props
		dispatch(handleSaveAnswer({
			qid: question.id,
			answer: answer,
			authedUser
		}))
	}
	render() {
	const { authedUser, question, users  } = this.props
	const isUndefined = (typeof question === 'undefined')

		return (
			<div>
				{
					isUndefined === true
					?<h3 className='center'>404 page not found</h3>
					:
					<div className='tweet'>
				{
					question['optionOne']['votes'].includes(authedUser)
					?<div>
						<h3>Would You Rather</h3>
						<img
							src={users[question.author].avatarURL}
							alt={`Avatar of ${question.author}`}
							className='avatar'
						/>
						<button className='choose btn'>
							{question.optionOne.text}<br/>
							{question['optionOne']['votes'].length} of {question['optionOne']['votes'].length + question['optionTwo']['votes'].length }<br/>
							{question['optionOne']['votes'].length/(question['optionOne']['votes'].length + question['optionTwo']['votes'].length )*100}%
						</button>
						<button className='btn' disabled>
							{question.optionTwo.text}<br/>
							{question['optionTwo']['votes'].length} of {question['optionOne']['votes'].length + question['optionTwo']['votes'].length }<br/>
							{question['optionTwo']['votes'].length/(question['optionOne']['votes'].length + question['optionTwo']['votes'].length )*100}%
						</button>
					</div>
					:question['optionTwo']['votes'].includes(authedUser)
					?<div>
						<h3>Would You Rather</h3>
						<img
							src={users[question.author].avatarURL}
							alt={`Avatar of ${question.author}`}
							className='avatar'
						/>
						<button className='btn'>
							{question.optionOne.text}<br/>
							{question['optionOne']['votes'].length} of {question['optionOne']['votes'].length + question['optionTwo']['votes'].length }<br/>
							{question['optionOne']['votes'].length/(question['optionOne']['votes'].length + question['optionTwo']['votes'].length )*100}%
						</button>
						<button className='choose btn' disabled>
							{question.optionTwo.text}<br/>
							{question['optionTwo']['votes'].length} of {question['optionOne']['votes'].length + question['optionTwo']['votes'].length }<br/>
							{question['optionTwo']['votes'].length/(question['optionOne']['votes'].length + question['optionTwo']['votes'].length )*100}%
						</button>
					 </div>
					:<form>
						<h3>Would You Rather</h3>
						<img
							src={users[question.author].avatarURL}
							alt={`Avatar of ${question.author}`}
							className='avatar'
						/>
						<button className='btn' onClick={this.handleSave} value='optionOne'>
							{question.optionOne.text}
						</button>
						<button className='btn' onClick={this.handleSave} value='optionTwo'>
							{question.optionTwo.text}
						</button>
					 </form>
				}
			</div>
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

export default connect(mapStateToProps)(OpenedQuestion)
