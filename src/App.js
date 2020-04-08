import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const App = (props) => {
  
  return (
      <div className='pageDisplay'>
        <div>
          {props.children} 
        </div>
      </div>
  );
};

export default connect()(App);