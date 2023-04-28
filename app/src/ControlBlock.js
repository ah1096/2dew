import React, { useState } from 'react';
import ToggleButton from './ToggleButton.js';

export default function ControlBlock(props) {
  return (
    <div id="controlBlock" className="row text-center">
      <div className="col">
        <p id="itemCounter" className="text-danger">
          {props.tasks.length} item(s) left
        </p>

        <ToggleButton {...props} />

        <button 
          id="clearBtn" 
          className="btn btn-success"
          onClick={() => {props.setTask([])}}
        >
          clear
        </button>
      </div>
    </div>
  )
}