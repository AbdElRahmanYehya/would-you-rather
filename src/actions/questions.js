import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function handleAddQuestion (firstText, secondText) {
	return (dispatch, getState) => {
		const {authedUser} = getState()
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

function saveAnswer ( {qid, authedUser, answer} ) {
	return {
		type: SAVE_ANSWER,
		id: qid,
		authedUser,
		answer,
	}
}

export function handleSaveAnswer (info) {
	return (dispatch) => {
		dispatch(saveAnswer(info))

		return saveQuestionAnswer(info)
			.catch((e) => {
				console.warn('Error')
				dispatch(saveAnswer(info))
				alert("error")
			})
	}
}