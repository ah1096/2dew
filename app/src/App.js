import './App.css'

import InputBlock from'./InputBlock.js';
import ListBlock from './ListBlock.js';
import ControlBlock from './ControlBlock.js';
import { useState, useEffect } from 'react';


export default function App(){
    const [tasks, setTask] = useState(() => {
        return JSON.parse(window.localStorage.getItem('tasks')) || []
    });
    const [status, setStatus] = useState("active");

    useEffect (() => {localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]); //second param = tasks = array of values to watch/values that when changed, trigger useeffect
    //if empty array, no values that will trigger rereun, TF can only run on 1st render (***see API calls)
    //if thing in array, when value update, useeffect runs again
    //METHOD 2: create another function from setTask which write to lo. storage, then state (***see Jonathan's code)


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