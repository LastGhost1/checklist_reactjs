import React from "react";
import { useLocalStorage } from '../CustomHooks/useLocalStorage';

const ToDoContext=React.createContext();

function ToDoProvider(props){
    const {
        item:toDos,
        saveItem:saveToDos,
        loading,
        error
    }=useLocalStorage('ToDos_V1',[]);
    const [searchValue,setSearchValue]=React.useState('');
    const [openModal,setOpenModal]=React.useState(false);
    
    const completedToDos=toDos.filter(todo=>!!todo.completed).length;
    const totalToDos=toDos.length;
    
    let filterToDos=[];
    filterToDos = toDos.filter((todo) => (
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    ));
    const addToDo=(text)=>{
        const newToDos=[...toDos];
        newToDos.push({
            completed:false,
            text:text
        });
        saveToDos(newToDos);
    };    
    const completeToDos=(text)=>{
        const newToDos=[...toDos];
        const toDoId=toDos.findIndex(todo=>todo.text===text);
        newToDos[toDoId].completed=true;
        saveToDos(newToDos);
    };
    const deleteToDos=(text)=>{
        const newToDos=[...toDos];
        const toDoId=toDos.findIndex(todo=>todo.text===text);
        newToDos.splice(toDoId,1);
        saveToDos(newToDos);
    };    
    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            filterToDos,
            addToDo,
            completeToDos,
            deleteToDos,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
};
export { ToDoContext, ToDoProvider }; 
