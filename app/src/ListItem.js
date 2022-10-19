export default function ListItem() {

    return (
        <li class="list-group-item d-flex align-items-center justify-content-between">

                <div>
                    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                        <label id="listItemName" class="form-check-label" for="firstCheckbox">    
                            this is a list item
                        </label>
                </div>
                
                    <div class="align-self-end">
                        <button class="btn btn-danger" type="button" id="deleteItemBtn">x</button>
                    </div>
            </li>
    )
}