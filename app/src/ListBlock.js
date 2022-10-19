import ListItem from './ListItem.js';



export default function ListBlock(){

    return (
        <div class="row">

        <div class="col">
        <ul class="list-group">

            {/* <li class="list-group-item d-flex align-items-center justify-content-between">

                <div>
                    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                        <label id="listItemName" class="form-check-label" for="firstCheckbox">    
                            eat bugs
                        </label>
                </div>
                
                    <div class="align-self-end">
                        <button class="btn btn-danger" type="button" id="deleteItemBtn">x</button>
                    </div>
            </li> */}

            <ListItem />

            <ListItem />

            <ListItem />
            </ul>
        </div>

        
    </div>
    )

}