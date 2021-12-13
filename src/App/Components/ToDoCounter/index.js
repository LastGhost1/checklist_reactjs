import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '.././../ToDoContext';

function ToDoCounter({total,completed}){
    const {totalToDos,completedToDos}=React.useContext(ToDoContext);
    return(
        <>
            <h1 className='Title'>CheckList</h1>
            <h2 className='ToDoCounter'>Has completado {completedToDos} de {totalToDos} ToDos</h2>
        </>
    );
}
export { ToDoCounter };
