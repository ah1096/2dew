import './App.css'

import InputBlock from'./InputBlock.js';
import ListBlock from './ListBlock.js';
import ControlBlock from './ControlBlock.js';
import { useState } from 'react'


export default function App(){




    const [tasks, setTask] = useState([]);

    // const [status, setStatus] = useState(true) <<<add this to use toggle buttons later


    






    return(
        <div className="container">

            <div className="row justify-content-center pb-3 mb-3">
                <div className="col-3">

                    <InputBlock 
                        setTask={setTask} 
                        tasks={tasks}/>

                    <ListBlock 
                        tasks={tasks}/>


                </div>
            </div>

            <ControlBlock />

        </div>


    )
}