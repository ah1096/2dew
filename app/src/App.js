import './App.css'

import InputBlock from'./InputBlock.js';
import ListBlock from './ListBlock.js';
import ControlBlock from './ControlBlock.js';
import { useState, useEffect } from 'react';


export default function App(){

    // banished to the shadow realm
    let localStorage = JSON.parse(window.localStorage.getItem('tasks'));
    let uhhh = [];
    if (localStorage) {
        uhhh = localStorage;
    }


    const [tasks, setTask] = useState(localStorage);
    const [status, setStatus] = useState("active");

    // this bit of code gets commented out because it broke my code
    useEffect (() => {localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return(
        <div className="container">

            <div className="row justify-content-center pb-3 mb-3">
                <div className="col-3">

                    <InputBlock 
                        setTask={setTask} 
                        tasks={tasks}
                        setStatus={setStatus}
                        status={status}
                        />

                    <ListBlock 
                        tasks={tasks}
                        setTask={setTask}
                        setStatus={setStatus}
                        status={status}/>


                </div>
            </div>

            <ControlBlock 
                setTask={setTask}
                tasks={tasks}
                setStatus={setStatus}
                status={status}
                />

        </div>


    )
}