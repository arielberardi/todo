import './status_selector.css';

import { useDispatch } from 'react-redux';
import { updateTodoFilter } from '../../slices/todo_list_slice.js';

const StatusSelector = ({ children, ...options }) => {
  const dispatch = useDispatch();

  const onSelectChange = (e) => dispatch(updateTodoFilter(e.target.value));
  
  return (
    <select className='selector' onChange={onSelectChange} {...options}>
      <option value='all'>All</option>
      <option value='completed'>Complete</option>
      <option value='incomplete'>Incomplete</option>
    </select>
  );
};

export default StatusSelector;