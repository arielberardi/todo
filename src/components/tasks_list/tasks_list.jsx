import './tasks_list.css';

import { useSelector } from 'react-redux';

import Task from '../task/task.jsx';

const TasksList = () => {
  const todoList = useSelector(state => state.todoList.list);
  const todoFilter = useSelector(state => state.todoList.filter);

  const filteredTodoList = todoList.filter((todo) => {
    if (todoFilter === 'all') 
      return true;

    return todo.completed === (todoFilter === 'completed');
  });

  console.log(filteredTodoList);
  
  return (
    <div className='tasks-container'>
      {filteredTodoList.map((todo, index) => <Task key={index} todo={todo} />)}
    </div>
  );
};

export default TasksList;