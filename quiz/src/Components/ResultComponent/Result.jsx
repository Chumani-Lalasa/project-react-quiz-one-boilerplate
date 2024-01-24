import React, { Component } from 'react';
import './Result.css'

export default class Result extends Component {
  render() {
    return (
      <div className='result-container'>
            <div className='heading'>
                <h1>Result</h1>
            </div>
            <div className='report-section'>
                <div className='report-headings'>
                    <div className='report'><h3>You need more practice!</h3></div>
                    <div className='score'><h2>Your score is 20%</h2></div>
                </div>
                <div className='overall-report'>
                    <div className='report1'>
                        <div className='report-name'>Total number of questions</div>
                        <div className='report-score'>15</div>
                    </div>
                    <div className='report2'>
                        <div className='report-name'>Number of attempted questions</div>
                        <div className='report-score'>9</div>
                    </div>
                    <div className='report3'>
                        <div className='report-name'>Number of correct answers</div>
                        <div className='report-score'>3</div>
                    </div>
                    <div className='report4'>
                        <div className='report-name'>Number of wrong answers</div>
                        <div className='report-score'>6</div>
                    </div>
                </div>
            </div>
            <div className='button-section'>
                <div className='playAgain-btn'><button>Play Again</button></div>
                <div className='home-btn'><button>Back to home</button></div>
            </div>
      </div>
    );
  }
}
