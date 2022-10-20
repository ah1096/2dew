import ListItem from './ListItem.js';



export default function ListBlock({item, id, setTask, tasks}){


    const toDoList = tasks.map(item => 
        <div key={item.id}>
            <ListItem 
                item={item.item}
                id={item.id}
                setTask={setTask}
                tasks={tasks}

                />
        </div>)

    return (
        <div className="row">

        <div className="col">
            <ul className="list-group">

                {toDoList}

            </ul>
        </div>

        
    </div>
    )

}