import { useEffect, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

let list = 
  [{ id: 1, title: 'Go to shop', description: 'Some desc'},
   { id: 2, title: 'Buy new cars', description: 'Some desc'}
  ]

const MainPage = () => {
    const [ todoList, setTodoList ] = useState(list)
    const [ isShow, setIsShow] = useState(false)
    const [ currentTodo, setCurrentTodo ] = useState({})
  
    const handleAdd = (data) => {
      const newTodoList = [ ...todoList, { ...data, id: Date.now()}]
      setTodoList(newTodoList)
      list = newTodoList
  }

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }
  
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //   const timeoutID = setTimeout(() => {
    //     setCount(prev => prev + 1)
    //   }, 1000)

    //   return () => {clearInterval(timeoutID)}
    // }, [count])
  
    const handleEdit = (data) => {
      const newTodoList = todoList.map((item) => {
        if (item.id === data.id) {
          return data
        } else {
          return item
        }
      })
    
      setTodoList(newTodoList)
    }
  
    const handleOpen = (todo) => {
      setIsShow(true)
      setCurrentTodo(todo)
    }

    const handleClose = () => {
      setIsShow(false)
      setCurrentTodo({})
    }

    const sortByDate = () => {
        const sorted = todoList.sort((a, b) => b.id - a.id) // desc

        setTodoList([ ...sorted ])
    }
    
    const [value, setValue] =useState('')

    useEffect(() => {
      let newList = []
        list.map((item) => 
        {
          if(item.title.toLocaleLowerCase().match(value)!== null) 
          {
            newList.push(item)
            setTodoList(newList)
          }
        })
      }, [value])

    return ( 
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <input value={value} onChange = {(e) => setValue(e.target.value)}></input>
            <button onClick={() => setIsShow(true)}>Создать таск</button>
            <button onClick={sortByDate}>sort asc</button>
            <TodoList handleEdit={handleEdit} list={todoList} handleDelete={handleDelete} handleOpen={handleOpen}/>
            {isShow && (
                <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
                )
            }
        </div>
     );
}
 
export default MainPage;