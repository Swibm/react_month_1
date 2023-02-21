import TodoCard from "./TodoCard";

const TodoList = ({ list, handleDelete, handleEdit, handleOpen }) => {
    return (
        <div className="todoList">
            {list.map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
     );
}
 
export default TodoList;