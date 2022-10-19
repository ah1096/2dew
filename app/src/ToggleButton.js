export default function ToggleButton(){
    return(
        <div id="toggleButtons" class="btn-group align-self-start" role="group">

            <input id="toggleAllBtn" type="radio" class="btn-check" name="btnradio" autocomplete="off"/>
                <label class="btn btn-outline-success" for="toggleAllBtn">
                    all
                </label>

            <input id="toggleToDewBtn" type="radio" class="btn-check" name="btnradio" autocomplete="off"/>
                <label class="btn btn-outline-success" for="toggleToDewBtn">
                    to-dew
                </label>

            <input id="toggleDoneBtn" type="radio" class="btn-check" name="btnradio" autocomplete="off"/>
                <label class="btn btn-outline-success" for="toggleDoneBtn">
                    done
                </label>

        </div>

    )
}