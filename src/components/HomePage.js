import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'


class HomePage extends Component {
	state = {
		answered: false,
	}

	showAnswered = (e) => {
		e.preventDefault()

		const {dispatch, id} = this.props
		console.log('id is :', id)

		this.setState(() => ({
			answered: true,
		}))
	}

	showunAnswered = (e) => {
		e.preventDefault()

		const {dispatch, id} = this.props
		console.log('id is :', id)

		this.setState(() => ({
			answered: false,
		}))
	}

	render() {
		const { answered } = this.state
		console.log(this.props)
		return (
			<div>
				<h3 className='center'>All questions</h3>
				<button className='btn' onClick={this.showAnswered}>
					Answered Questions
				</button>
				<button className='btn' onClick={this.showunAnswered}>
					Unanswered Questions
				</button>
				{answered === true
								? <div>
									<ul className='dashboard-list'>
										<AnsweredQuestions />
									</ul>
								   </div>
								: <div>
									<ul className='dashboard-list'>
										<UnansweredQuestions />
									</ul>
								   </div>}
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