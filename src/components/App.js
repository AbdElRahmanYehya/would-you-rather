import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import HomePage from './HomePage'
import AnsweredQuestions from './AnsweredQuestions'
import OpenedUnansweredQuestion from './OpenedUnansweredQuestion'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
  	this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={HomePage}/>
                <Route path='/questions/:id' exact component={OpenedUnansweredQuestion}/>
              </div>
          }
        </div>
        </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect()(App)