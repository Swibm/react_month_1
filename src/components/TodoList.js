import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import classes from './components.module.css'
import SumComp from "./sumComp";
import Hoc from "./Hoc";

const TodoList = ({ list, handleDelete, handleEdit, handleOpen, handleNextPage, handlPrevPage, page }) => {

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



    // const [pag, setPag] = useState(
    //     {
    //         limit:2,
    //         offset:0
    //     }
    // )


    return (
        <div className="todoList">
            <Hoc Component={SumComp}/>
            <button className={type === 'asc' ? classes.buttonActive :classes.button} onClick={() => setType('asc')}>Asc</button>
            <button className={classes.button} onClick={() => setType('desc')}>Desc</button>
            <button className={classes.button} onClick={() => setType('letter')}>By letter</button>
            {filterSort(type).map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
            <button onClick={handlPrevPage}>Prev</button>
            <h2> {page}</h2>
            <button onClick={handleNextPage}>Next</button>
        </div>
     );
}
 
export default TodoList;