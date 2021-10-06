import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import ClosedUnansweredQuestion from './ClosedUnansweredQuestion'

class OpenedUnansweredQuestion extends Component {
	render() {
	console.log(this.props)
	const {id} = this.props
		return (
			<div className='tweet'>
				<ClosedUnansweredQuestion id={id}/>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, questions, users}, props) {
	const {id} = props.match.params

	return {
		id,
	}
}

export default connect(mapStateToProps)(OpenedUnansweredQuestion)