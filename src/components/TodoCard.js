import { Component } from "react";

// const TodoCard = ({ todo, handleOpen, handleDelete }) => {
//     return ( 
//         <div className="todocard">
//             <h1>{todo.title}</h1>
//             <h1>{todo.description}</h1>
//             <button onClick={() => handleOpen(todo)}>edit</button>
//             <button onClick={() => handleDelete(todo.id)}>delete</button>
//         </div>
//      );
// }
 

class TodoCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="todocard">
            <h1>{this.props.todo.title}</h1>
            <h1>{this.props.todo.description}</h1>
            <button onClick={() => this.props.handleOpen(this.props.todo)}>edit</button>
            <button onClick={() => this.props.handleDelete(this.props.todo.id)}>delete</button>
        </div>
        )
    }
}

export default TodoCard;
