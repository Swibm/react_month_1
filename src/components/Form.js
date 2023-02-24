import { useState } from "react";
import Input from "./Input";

const Form = ({ handleAdd, handleEdit, handleClose, currentTodo }) => {

    const [ value, setValue ] = useState(currentTodo.title ? currentTodo : {
        title: '',
        description: '',
    })
    const isEdit = currentTodo.title ? true : false

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [ e.target.name ]: e.target.value
        })
    }

    

    const action = () => {
        if (isEdit) {
            handleEdit(value)
            handleClose()
        } else {
            handleAdd(value)
            handleClose()
        }
    }

    return ( 
        <div className="form">
        {
            Object.keys(value).map((item) => 
                item !== 'id' && (
                    <Input key={item} name={item} value={value[item]} onChange={handleOnChange} placeholder='Search some'/>
                ) 
            )
        }
        <button onClick={action}>{isEdit ? 'Редактировать' : 'Создать таск'}</button>
        </div>
     );
}
 
export default Form;