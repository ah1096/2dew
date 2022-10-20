export default function ToggleButton({ item, id, setTask, tasks, setItem, status, setStatus }){
    return(
        <div id="toggleButtons" className="btn-group align-self-start" role="group">

            <input 
                id="toggleAllBtn" 
                type="radio" 
                className="btn-check" 
                name="btnradio" 
                autoComplete="off"
                
                onClick={() => {
                    if (status === "active"){
                    setStatus(status = "done")}}}
                
                />
                <label className="btn btn-outline-success" htmlFor="toggleAllBtn">
                    all
                </label>

            <input 
                id="toggleToDewBtn" 
                type="radio" 
                className="btn-check" 
                name="btnradio" 
                autoComplete="off"/>
                <label 
                    className="btn btn-outline-success" 
                    htmlFor="toggleToDewBtn">
                    to-dew
                </label>

            <input 
                id="toggleDoneBtn" 
                type="radio" 
                className="btn-check" 
                name="btnradio" 
                autoComplete="off"/>
                <label className="btn btn-outline-success" htmlFor="toggleDoneBtn">
                    done
                </label>

        </div>

    )
}