import { useState } from "react";
import TodoCard from "./TodoCard";
import classes from './components.module.css'
import SumComp from "./sumComp";
import Hoc from "./Hoc";

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

    const [pag, setPag] = useState(
        {
            limit:2,
            offset:0
        }
    )

    const [page, setPage] = useState(1)

    const handlPrevPage = () => {
        if(pag.offset === 1) return
        setPag((prev) => ({...prev, offset: prev.offset - prev.limit}))
        setPage(page - 1)
    }

    const countPages = Math.ceil(filterSort(type).length / pag.limit)

    const handleNextPage = () => {
        if(page === countPages) {return}
        setPag((prev) => ({...prev, offset: prev.limit + prev.offset}))
        setPage(page + 1)
    }



    return (
        <div className="todoList">
            <Hoc Component={SumComp}/>
            <button className={type === 'asc' ? classes.buttonActive :classes.button} onClick={() => setType('asc')}>Asc</button>
            <button className={classes.button} onClick={() => setType('desc')}>Desc</button>
            <button className={classes.button} onClick={() => setType('letter')}>By letter</button>
            {filterSort(type).slice(pag.offset, pag.offset + pag.limit).map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
            <button onClick={handlPrevPage}>Prev</button>
            <h2> {page + ' / ' + countPages}</h2>
            <button onClick={handleNextPage}>Next</button>
        </div>
     );
}
 
export default TodoList;