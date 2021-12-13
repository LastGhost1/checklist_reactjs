import React from 'react';
import './ToDoSearch.css';
import { ToDoContext } from '.././../ToDoContext';

function ToDoSearch(){
    const {searchValue,setSearchValue}=React.useContext(ToDoContext);
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    };
    return(
        <>
            <input 
                className='ToDoSearch' 
                placeholder=''
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </>
    );
}
export { ToDoSearch };