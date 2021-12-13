import React from 'react';
import { ToDoContext } from '../../ToDoContext';
import './ToDoForm.css';

function ToDoForm(){
    const{addToDo,setOpenModal}= React.useContext(ToDoContext);
    const [newToDoValue,setNewToDoValue]= React.useState('');
    
    const onchange=(event)=>{
        setNewToDoValue(event.target.value);
    };
    const onCancel=()=>{
        setOpenModal(false);
    };
    const onAdd=(event)=>{
        event.preventDefault();
        addToDo(newToDoValue);
        onCancel();
    };

    return(
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                value={newToDoValue}
                onChange={onchange}
                placeholder='Volar hacia el cielo'
            />
            <div className="ToDoForm-buttonContainer">
                <button
                    className="ToDoForm-button ToDoForm-button-cancel"
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="ToDoForm-button ToDoForm-button-add"
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );

}

export { ToDoForm };