import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'


class HomePage extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<h3 className='center'>All questions</h3>
				<ul className='dashboard-list'>
					<UnansweredQuestions />
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({ questions }) {
	console.log("ds")
	return {
		questionsIds: Object.keys(questions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(HomePage)