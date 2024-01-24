import React, { Component } from 'react';
import './Quiz.css'
export default class Quiz extends Component {
  render() {
    return (
        <div className='page-container'>
            <div className='container'>
            <div className='top-section'>
                <div className='page-section'>
                    <p className='page'>1 of 15</p>
                </div>
                <div className='Question-section'>
                    <div><h1>Question</h1></div>
                    <div><p className='Question'>Which is the only mammal that can jump?</p></div>
                </div>
            </div>
            <div className='bottom-section'>
                <div className='option-section'>
                    <div className='option-button'><input type="button" value={"Dog"}/></div>
                    <div className='option-button'><input type="button" value={"Elephant"}/></div>
                    <div className='option-button'><input type="button" value={"Goat"}/></div>
                    <div className='option-button'><input type="button" value={"Lion"}/></div>
                </div>
                <div className='button-section'>
                    <div className='button'><button className='previous-btn'>Previous</button></div>
                    <div className='button'><button className='next-btn'>Next</button></div>
                    <div className='button'><button className='quit-btn'>Quit</button></div>
                </div>
            </div>
      </div>
        </div>
      
    );
  }
}
