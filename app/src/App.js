import './App.css'
import InputBlock from'./InputBlock.js';
import ListBlock from './ListBlock.js';
import ControlBlock from './ControlBlock.js';



export default function App(){
    return(
        <div class="container">

            <div class="row justify-content-center pb-3 mb-3">
                <div class="col-3">

                    <InputBlock />

                    <ListBlock />

                </div>
            </div>

            <ControlBlock />

        </div>


    )
}