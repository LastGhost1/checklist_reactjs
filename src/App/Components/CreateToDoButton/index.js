import React from "react";
import './CreateToDoButton.css';
import { ToDoContext } from '.././../ToDoContext';

function CreateToDoButton(){
    const {
        setOpenModal,
      } = React.useContext(ToDoContext);

    const onClickButton=()=>{
        setOpenModal(prevState=>!prevState);
    };
    return(
        <button 
            className='CreateToDoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateToDoButton };