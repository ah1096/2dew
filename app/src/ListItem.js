

export default function ListItem({ item, id, setTask, tasks, setItem }){

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">

                <div>
                    <input 
                        className="form-check-input me-1" 
                        type="checkbox" 
                        value="" 
                        id="firstCheckbox"/>

                        <label  
                            className="form-check-label" 
                            htmlFor="firstCheckbox"
                            item={item}
                            id={id}
                            // status="active"
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