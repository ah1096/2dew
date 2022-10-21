import './App.css'

import InputBlock from'./InputBlock.js';
import ListBlock from './ListBlock.js';
import ControlBlock from './ControlBlock.js';
import { useState } from 'react';


export default function App(){


    const [tasks, setTask] = useState([]);
    const [status, setStatus] = useState("active");

    

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