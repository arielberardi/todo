import './todo_modal.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../button/button.jsx';
import { addTodo, updateTodo } from '../../slices/todo_list_slice.js';

const TodoModal = ({ action, todo, modalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    if (action === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.completed ? 'completed' : 'incompleted');
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [modalOpen]);

  const onInputChangeHandler = (e) => setTitle(e.target.value);
  const onSelectChangeHandler = (e) => setStatus(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    let newTodo = {
      ...todo,
      title: title,
      completed: status === 'completed'
    };

    if (action === 'add') {
      dispatch(addTodo({
        ...newTodo,
        id: Date.now(),
        date: currentDate.toLocaleString()
      }));
    } else {
      dispatch(updateTodo(newTodo));
    }

    setModalOpen(false);
  };

  const onCloseModalHandler = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <div className={`todo-modal-container ${modalOpen ? 'active' : ''}`}>
        <div className='todo-modal-header'>
          <h3>{action} Task</h3>
        </div>
        <form className='todo-modal-form'>
          <label htmlFor='titleInput'>
            Title
            <input id='titleInput' key='titleInput' type='text' value={title} onChange={onInputChangeHandler} />
          </label>
          <label htmlFor='statusInput'>
            Status
            <select id='statusInput' value={status} onChange={onSelectChangeHandler}>
              <option value='incompleted'>Incompleted</option>
              <option value='completed'>Completed</option>
            </select>
          </label>
          <div className='todo-modal-buttons'>
            <Button onClick={onSubmitHandler}>{action} Task</Button>
            <Button onClick={onCloseModalHandler}>Cancel</Button>
          </div>
        </form>
      </div>
      <div id='todo-modal-overlay' className={modalOpen ? 'active' : ''}></div>
    </>
  );
};

export default TodoModal;