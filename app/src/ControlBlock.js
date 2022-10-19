import ToggleButton from './ToggleButton.js';


export default function ControlBlock(){

    return (
        <div id="controlBlock" class="row text-center">

                <div class="col">

                    <p id="itemCounter" class="text-danger">
                        1 item left
                    </p>
            
                    <ToggleButton />

                    <button id="clearBtn" class="btn btn-success">
                        clear
                    </button>

                </div>

            </div>

    )
}