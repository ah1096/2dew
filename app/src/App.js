import './App.css'

import InputBlock from'./InputBlock.js';
import ListBlock from './ListBlock.js';
import ControlBlock from './ControlBlock.js';
import { useState, useEffect } from 'react';


export default function App(){
    const [tasks, setTask] = useState(() => {
        return JSON.parse(window.localStorage.getItem('tasks')) || []
    });
    const [taskstatus, setStatus] = useState("active");

    useEffect (() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const props = { setTask, tasks, setStatus, taskstatus };

    console.log(tasks)

    return(
        <div className="container">
            <div className="row justify-content-center pb-3 mb-3">
                <div className="col-3">
                    <InputBlock {...props} />
                    <ListBlock {...props} />
                </div>
            </div>
            <ControlBlock {...props} />
        </div>
    )
}