import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addTask,
  deleteTask,
  changeTask,
  changeStatus,
  setActiveTask,
  selectTasks,
  selectStatus,
  selectActiveTask,
} from './tasksSlice';

const TasksContainer = () => {
  const tasks = useSelector(selectTasks);
  const status = useSelector(selectStatus);
  const activeId = useSelector(selectActiveTask);
  const dispatch = useDispatch();

  const [text, settext] = useState('');
  const [cost, setcost] = useState('');

  const handlerAddTask = () => {
    if (text && cost) {
      status === 'add' &&
        dispatch(
          addTask({
            id: tasks.length,
            text,
            cost,
          })
        );
      status === 'change' && dispatch(changeTask({ text, cost }));
      settext('');
      setcost('');
    }
  };

  const handlerSelectTask = (id) => {
    dispatch(changeStatus('change'));
    dispatch(setActiveTask(id));
  };

  return (
    <div className="container-tasks">
      <div className="active-task__container">
        <input value={text} onInput={(event) => settext(event.target.value)} />
        <input value={cost} onInput={(event) => setcost(event.target.value)} />
        <button onClick={handlerAddTask}>save</button>
      </div>
      <ul>
        {tasks.map((element) => (
          <li key={element.id}>
            <span>{element.text}</span> <span>{element.cost}</span>{' '}
            <button
              onClick={() => {
                handlerSelectTask(element.id);
                settext(element.text);
                setcost(element.cost);
              }}
            >
              &#9998;
            </button>{' '}
            <button
              onClick={() => {
                dispatch(deleteTask(element.id));
              }}
            >
              &#10006;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksContainer;
