import React from 'react';
import './App.css';
import ReactLoading from 'react-loading';
import { ToDoContext } from './ToDoContext';
import { ToDoCounter } from './Components/ToDoCounter';
import { ToDoSearch } from './Components/ToDoSearch';
import { ToDoList } from './Components/ToDoList';
import { ToDoItem } from './Components/ToDoItem';
import { CreateToDoButton } from './Components/CreateToDoButton';
import { Modal } from './Modal';
import { ToDoForm } from './Components/ToDoForm';
import { ToDoVoid } from './Components/ToDoVoid';
import { ToDoError } from './Components/ToDoError';

function AppUI() {
  const {
    error,
    loading,
    filterToDos,
    completeToDos,
    deleteToDos,
    openModal,
  } = React.useContext(ToDoContext);
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {loading && <ReactLoading  className='react-loading' type='bars' height={'20%'} width={'20%'} />}
        {error && <ToDoError/>}
        {(!loading && !filterToDos.length) && <ToDoVoid/>}

        {filterToDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDos(todo.text)}
            onDelete={() => deleteToDos(todo.text)}
          />
        ))}
      </ToDoList>
      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUI };