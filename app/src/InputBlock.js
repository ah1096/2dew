import { useState } from 'react';
import ListItem from './ListItem';


export default function InputBlock(){
    
    let nextID= 0

        const [item, setItem] = useState('');
        const [tasks, setTask] = useState([]);

        // const [status, setStatus] = useState(true) <<<add this to use toggle buttons later

        return (

            <div id="inputBlock" class="text-center">

                <h1>To Dew List</h1>

                <div id="addTask" class="input-group mb-3">
                    <input 
                        id="itemInput" 
                        type="text" 
                        class="form-control" 
                        placeholder="add a task" 
                        value = {item}
                        onChange={e => setName(e.target.value)}
                    />

                    <button 
                        class="btn btn-success" 
                        type="button" 
                        id="addItemBtn"
                        onClick={()=> {
                            setItem('');
                            setTask([
                                ...tasks,
                                { id: nextID++, item: item}
                            ])
                        }}
                        >
                        +
                    </button>

                    
                    <ListItem
                        name=""
                        id=""
                    />


                    </div>

            </div>



        )
    
}