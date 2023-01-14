import './App.css';

import { useState } from 'react';

import Button from './components/button/button.jsx';
import StatusSelector from './components/status_selector/status_selector.jsx';
import TasksList from './components/tasks_list/tasks_list.jsx';
import TodoModal from './components/todo_modal/todo_modal.jsx';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onAddTaskHandler = (e) => setModalOpen(true);
  
  return (
    <div className='app-container'>
      <h1 className='app-title'>Todo List</h1>
      <div className='app-header'>
        <Button onClick={onAddTaskHandler}>Add Task</Button>
        <StatusSelector />
        <TodoModal action='add' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </div>
      <div className='app-content'>
        <TasksList />
      </div>
    </div>
  );
};

export default App;