import React, { Component } from 'react'

export class SucessMsg extends Component {
    render() {
        return (
            <div className='card-body text-center'>
                <div className='mt-2 mb-4'>
                    <img src="../images/illustration-thank-you.svg" className="success-img" alt="..."></img>
                </div>
                <span className='text-orange mt-4 rounded-pill selected-rating px-3 py-1'>You selected  out of 5</span>
                <h4 className="card-title mt-4 fw-bold my-3">Thank you!</h4>
                <p className="card-text text-15 text-light-grey">We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!</p>
            </div>
        )
    }
}

export default SucessMsg