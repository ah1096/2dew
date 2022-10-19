import { useState } from 'react';
import ListItem from './ListItem';





export default function InputBlock(){

    return (
        <div id="inputBlock" class="text-center">

            <h1>To Dew List</h1>

                <div id="addTask" class="input-group mb-3">
                    <input id="itemInput" type="text" class="form-control" placeholder="add a task" />
                    <button class="btn btn-success" type="button" id="addItemBtn">+</button>
                </div>

        </div>



    )


}