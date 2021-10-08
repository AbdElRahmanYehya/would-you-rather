import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import HomePage from './HomePage'
import OpenedQuestion from './OpenedQuestion'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'


class App extends Component {
  componentDidMount() {
  	this.props.dispatch(handleInitialData())
  }
    handleLogout = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    console.log(' nhark lazeez ')
    dispatch(setAuthedUser(null))
  }
  render() {
    console.log(this.props.authedUser)
    return (
      <Router>
        <div className='container'>
          <Nav />
          <li className='nav topright' onClick={this.handleLogout}>
            Logout
          </li>
          {this.props.loading === true
            ? <div>
                  <Route path='/' exact component={Login}/>
                  <Route path='/questions/:id' exact component={Login}/>
                  <Route path='/add' exact component={Login}/>
                  <Route path='/leaderboard' exact component={Login}/>
              </div>
            : <div>
                <li className='nav logedin'>
                  Welcome back {this.props.users[this.props.authedUser].name}
                </li>
                <Route path='/' exact component={HomePage}/>
                <Route path='/questions/:id' exact component={OpenedQuestion}/>
                <Route path='/add' exact component={NewQuestion}/>
                <Route path='/leaderboard' exact component={Leaderboard}/>
              </div>
          }
        </div>
        </Router>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)