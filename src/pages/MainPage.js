import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "../components/ModalWindow";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import { fetchTodosByParams } from "../requests";

let list = 
  [{ id: 1, title: 'Go to shop', description: 'Some desc'},
   { id: 2, title: 'Buy new cars', description: 'Some desc'},
   {id: 3, title: 'Go to shop1', description: 'Some desc'},
   {id: 4, title: 'Buy new cars2', description: 'Some desc'}
  ]

const MainPage = () => {
    const [ todoList, setTodoList ] = useState(list)
    const [ isShow, setIsShow] = useState(false)
    const [ currentTodo, setCurrentTodo ] = useState({})
    const [page, setPage] = useState(1)


    const handleAdd = (data) => {
      const newTodoList = [ ...todoList, { ...data, id: Date.now()}]
      setTodoList(newTodoList)
      list = newTodoList
  }

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }

    const handleEdit = (data) => {
      const newTodoList = todoList.map((item) => {
        if (item.id === data.id) {
          return data
        } else {
          return item
        }
      })
      list = newTodoList
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
          if(item.title.toLocaleLowerCase().match(value.toLocaleLowerCase())!== null) 
          {
            newList.push(item)
            setTodoList(newList)    
          }
        })
      }, [value] )

      const handlPrevPage = () => {
        if (page === 1) return
        setPage(page - 1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }

      useEffect(() => {
      //   fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5&_page=${page}`)
      // .then(response => response.json())
      // .then(json => setTodoList(json))

        const params = {
          _limit: 3,
          _page: page
        }

      fetchTodosByParams(params).then(({ data }) => {
        setTodoList(data)
      })

    }, [ page ])

    return ( 
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <span className="searchTitle">Search by Title</span>
            <input className="searchInput" value={value} onChange = {(e) => setValue(e.target.value)}></input>
            <button onClick={() => setIsShow(true)}>Создать таск</button>
            <button onClick={sortByDate}>sort asc</button>
            <TodoList page = {page}
                handlPrevPage = {handlPrevPage}
                handleNextPage={handleNextPage}
                handleEdit={handleEdit} list={todoList}
                handleDelete={handleDelete}
                handleOpen={handleOpen}/>
            {isShow && (
                <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
                )
            }
        </div>
     );
}
 
export default MainPage;