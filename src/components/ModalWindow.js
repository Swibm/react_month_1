import { useEffect, useState } from "react";
import Form from "./Form";
import modalWrapper from "./modalWrapper";

const ModalWindow = ({ handleClose, handleEdit, handleAdd, currentTodo }) => {
   
    const keydown = (e) => {
        if(e.key === 'Escape') {
            handleClose()
        }
    }

    useEffect(()=> {
        window.addEventListener('keydown', keydown)
        return () => {window.removeEventListener('keydown', keydown)}
    }, [])

    return (
        <modalWrapper>
            <div className="modalWrapper" onClick={handleClose}>
                <div className="modal" onClick={(e) => {e.stopPropagation()}}>
                    <Form handleClose={handleClose} handleEdit={handleEdit} handleAdd={handleAdd} currentTodo={currentTodo}/>
                </div>
            </div>
        </modalWrapper>
     );
}
 
export default ModalWindow;