import React, {Component} from 'react'
import {connect} from 'react-redux'
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

	showUnanswered = (e) => {
		e.preventDefault()

		const {dispatch, id} = this.props
		console.log('id is :', id)

		this.setState(() => ({
			answered: false,
		}))
	}

	render() {
		const { answered } = this.state
		return (
			<div className='center'>
				<h3>All questions</h3>
				<button className='btn' onClick={this.showAnswered}>
					Answered Questions
				</button>
				<button className='btn' onClick={this.showUnanswered}>
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

export default connect()(HomePage)