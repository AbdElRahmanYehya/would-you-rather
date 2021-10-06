import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function handleAddQuestion (firstText, secondText) {
	return (dispatch, getState) => {
		const {authedUser} = getState()
		console.log(authedUser)
		return saveQuestion({ 
			optionOneText: firstText, 
			optionTwoText: secondText, 
			author: authedUser,}
			)
			.then((question) => dispatch(addQuestion(question)))
	}
}

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}
