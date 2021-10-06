import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class UnansweredQuestions extends Component {
	render() {
		const { questions } = this.props
		// bdal el map di n3ml w7da bel questions bs 3shan n3rf hal kol wa7d leh votes wla la2
		console.log(this.props.questionsIds)
		return (
			<div>
				<h3 className='center'>Answred Questions</h3>
				<ul className='dashboard-list'>
					{this.props.questionsIds.map((id) => (
						<li key={id}>
							<Question id={id} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser, users, questions }) {
	console.log("hi :", Object.keys(questions).length)

	const questionsIds = Object.keys(questions)
	const answeredIds = []
	for(let i = 0; i < questionsIds.length; i++) {
		let flag = 0
		for (let j = 0; j < questions[questionsIds[i]].optionOne.votes.length; j++) {
		  if (questions[questionsIds[i]].optionOne.votes[j] === authedUser) {
		  	flag = 1
		  	break;
		  }
		}
		for (let j = 0; j < questions[questionsIds[i]].optionTwo.votes.length; j++) {
		  if (questions[questionsIds[i]].optionTwo.votes[j] === authedUser) {
		  	flag = 1
		  	break;
		  }
		}
		if (flag === 0) {
			answeredIds.push(questionsIds[i])
		}
	}
	console.log("bye :", answeredIds)
	return {
		questionsIds: answeredIds,
		authedUser,
		questions: questions
	}
}

export default connect(mapStateToProps)(UnansweredQuestions)