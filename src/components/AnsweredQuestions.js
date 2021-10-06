import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

const answeredIds = []

class AnsweredQuestions extends Component {
	render() {
		const { questions } = this.props
		// bdal el map di n3ml w7da bel questions bs 3shan n3rf hal kol wa7d leh votes wla la2
		console.log(questions)
		return (
			<div>
				<h3 className='center'>Your Timeline</h3>
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

function mapStateToProps ({ authedUser, users, questions }, { id }) {
	console.log("hi :", questions[id].optionOne.votes.length)
	console.log("hi :", authedUser)
	
	
	for (let i = 0; i < questions[id].optionOne.votes.length; i++) {
	  if (questions[id].optionOne.votes[i] === authedUser) {
	  	console.log("The id abl is: ", id)
	  	answeredIds.push(id)
	  	console.log("The id b3d is: ", id)
	  	break;
	  }
	  else if (questions[id].optionTwo.votes[i] === authedUser) {
	  	console.log("The id is: ", id)
	  	answeredIds.push(id)
	  	break;
	  }
	}
	console.log(answeredIds)
	return {
		questionsIds: Object.keys(questions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		authedUser,
		questions: questions
	}
}

export default connect(mapStateToProps)(AnsweredQuestions)