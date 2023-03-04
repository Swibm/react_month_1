import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTodosById } from "../requests";

const IdTodo = () => {

    const {id} = useParams()
    const [details, setDetails] = useState({})


    useEffect(() => {
          fetchTodosById(id).then(({ data}) => {
            setDetails(data)
        })
      }, [])

      
    return ( 
        <div>
            <h1>Description: {details.title}</h1>
        </div>
     );
}


 
export default IdTodo;