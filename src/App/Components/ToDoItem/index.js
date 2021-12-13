import React from "react";
import './ToDoItem.css';
import { BsCheck2Square } from "react-icons/bs";
import { ImCross } from "react-icons/im";


function ToDoItem(props){
    return(
        <li className="ToDoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <BsCheck2Square className="border-x" />
            </span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <ImCross/>
            </span>
        </li>
        
    );
}

export { ToDoItem };