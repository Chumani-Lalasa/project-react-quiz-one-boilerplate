import React, { Component } from 'react';
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div className='main-container'>
        <div><h2 className='title'>Quiz App</h2></div>
        <div><button className='play-btn'>Play</button></div>
      </div>
    );
  }
}
