import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
	state = {
		firstText: '',
		secondText: '',
		toHome: false,
	}
	chenageFirstText = (e) => {
		const firstText = e.target.value

		this.setState(() => ({
			firstText
		}))
	}
	changeSecondText = (e) => {
		const secondText = e.target.value

		this.setState(() => ({
			secondText
		}))
	}
	handleSubmit = (e) => {
		e.preventDefault()

		const {firstText, secondText} = this.state
		const { dispatch } = this.props

		dispatch(handleAddQuestion(firstText, secondText))

		this.setState(() => ({
			firstText: '',
			secondText: '',
			toHome: true,
		}))
	}

	render() {
		const {firstText, secondText, toHome} = this.state
		const spaceLeft = 60 - firstText.length
		
		if (toHome === true) {
			return <Redirect to='/'/>
		}

		return (
			<div>
				<h3 className='center'>Compose new Question</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<h3>Would You Rather</h3>
					<textarea
						placeholder="Option one?"
						value = {firstText}
						onChange={this.chenageFirstText}
						className='textarea'
						maxLength={60}
					/>
					<textarea
						placeholder="Option two"
						value = {secondText}
						onChange={this.changeSecondText}
						className='textarea'
						maxLength={60}
					/>
					{spaceLeft <= 20 && (
						<div className='tweet-length'>
						 	{spaceLeft}
						</div>
					)}
					<button className='btn' type='submit' disabled={firstText === '' || secondText === ''}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(NewQuestion)