import React from "react";
import './ToDoVoid.css';
import { FaClipboardList } from "react-icons/fa";

function ToDoVoid(){
    return(
        <div className="text-center">
            <FaClipboardList className="icon-clipboard"/>
            <p className="text-clipboard">ToDos No Encontrados</p>
        </div>
    );
}

export { ToDoVoid };