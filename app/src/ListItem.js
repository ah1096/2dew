

export default function ListItem({ item, id, setTask, tasks, setItem, status, setStatus }){

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">

                <div>
                    <input 
                        className="form-check-input me-1" 
                        type="checkbox" 
                        value="" 
                        id="firstCheckbox"


// checkboxes don't toggle back and forth between active and done                        
                        onClick={() => {
                            if (status === "active"){
                                setStatus("done")

                            
                            }}
                        
                            // let clickCount = 2
                
                            // if (clickCount % 2 === 0){
                            // setStatus(status = "done")
                            // }else{setStatus(status = "active")};

                            // clickCount++
                            // console.log(clickCount);
                        // }}
                            }/>

                        <label  
                            className="form-check-label" 
                            htmlFor="firstCheckbox"
                            item={item}
                            id={id}
                            status={status}
                            >    
                                {item}
                        </label>

                </div>
                
                    <div className="align-self-end">
                        <button 
                            className="btn btn-danger" 
                            type="button" 
                            id="deleteItemBtn"
                            onClick={() => {
                                    setTask(tasks.filter(a =>
                                        a.id !== id))
                            }}


                            >x</button>
                    </div>
            </li>
    )
}