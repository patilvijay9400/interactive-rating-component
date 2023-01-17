import React, { Component } from 'react'
import RatingForm from './Components/RatingForm'
import SucessMsg from './Components/SucessMsg'

export class App extends Component {
  state = {
    show: true
  }
  render() {
    return (
      <div className="App vh-100 bg-very-dark-blue d-flex justify-content-center align-items-center">
        <div className="card bg-dark-blue text-white p-2">
          {this.state.show ?
            <div className="card-body">
              <div className="img-div bg-medium-grey rounded-circle d-flex justify-content-center align-items-center">
                <img src="../images/icon-star.svg" className="card-img-top" alt="..."></img>
              </div>
              <h5 className="card-title mt-4 fw-bold mb-3">How did we do?</h5>
              <p className="card-text text-15 text-light-grey">Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>
              <RatingForm />
              <button onClick={() => { this.setState({ show: !this.state.show }) }} class="btn btn-orange bg-orange text-white w-100 rounded-pill fw-bold text-15" type="submit">SUBMIT</button>
            </div>
            : null
          }
          {!this.state.show ?
            <SucessMsg />
            : null
          }

        </div>
      </div>
    )
  }
}

export default App
