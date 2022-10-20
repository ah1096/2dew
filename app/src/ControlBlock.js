import ToggleButton from './ToggleButton.js';


export default function ControlBlock(){

    return (
        <div id="controlBlock" className="row text-center">

                <div className="col">

                    <p id="itemCounter" className="text-danger">
                        1 item left
                    </p>
            
                    <ToggleButton />

                    <button id="clearBtn" className="btn btn-success">
                        clear
                    </button>

                </div>

            </div>

    )
}