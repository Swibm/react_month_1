import { useState } from "react";
import TodoCard from "./TodoCard";
import classes from './components.module.css'

const TodoList = ({ list, handleDelete, handleEdit, handleOpen }) => {

    const [type, setType] = useState('asc')


    const filterSort = (type) => {
        switch (type) {
            case 'asc': {
                return list.sort((a, b) => b.id - a.id)
            }
            case 'desc': {
                return list.sort((a, b) => a.id - b.id)
            }
            case 'letter': {
                return list.sort((a,b) => {a.title.localeCompare(b.title)})
            }
            default: return list
        }
    }

    return (
        <div className="todoList">
            <button className={type === 'asc' ? classes.buttonActive :classes.button} onClick={() => setType('asc')}>Asc</button>
            <button className={classes.button} onClick={() => setType('desc')}>Desc</button>
            <button className={classes.button} onClick={() => setType('letter')}>By letter</button>
            {filterSort(type).map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
     );
}
 
export default TodoList;