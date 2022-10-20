import ListItem from './ListItem.js';



export default function ListBlock({tasks}){


    const toDoList = tasks.map(item => 
        <div key={item.id}>
            <ListItem 
                item={item.item}
                id={item.id}
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