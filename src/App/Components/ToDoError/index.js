import React from "react";
import './ToDoError.css';
import { BiErrorAlt } from "react-icons/bi";

function ToDoError(){
    return(
        <div className="text-center">
            <BiErrorAlt className="icon-errorAlt"/>
            <p className="text-errorAlt">Error al buscar ToDos</p>
        </div>
    );
}

export { ToDoError };