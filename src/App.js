import React, {Component} from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"
import Collapsible from './Collapsible'
import Sidebar from './Sidebar'

class App extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit()
  }

  render() {
    return(
      <div className="app">
        <Sidebar />

        <Collapsible />

        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
