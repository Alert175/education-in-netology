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
} from './tasksSlice';

const TasksContainer = () => {
  const tasks = useSelector(selectTasks);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const [text, settext] = useState('');
  const [cost, setcost] = useState('');
  const [filter, setfilter] = useState('');

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

  const handlerClearState = () => {
    settext('');
    setcost('');
    setfilter('');
    dispatch(setActiveTask(null));
    dispatch(changeStatus('add'));
  };

  const handlerFilterTasks = () => {
    try {
      if (filter !== '') {
        const filterTasks = tasks.filter(
          (task) => task.text.includes(filter) === true
        );
        return [...filterTasks];
      }
      return [...tasks];
    } catch (error) {
      console.error(error);
      return [...tasks];
    }
  };

  return (
    <div className="container-tasks">
      <div className="task__filter">
        <input
          value={filter}
          onInput={(event) => setfilter(event.target.value)}
        />
        <span>filter</span>
      </div>
      <div className="active-task__container">
        <input value={text} onInput={(event) => settext(event.target.value)} />
        <input value={cost} onInput={(event) => setcost(event.target.value)} />
        <button onClick={handlerAddTask}>save</button>
        <button onClick={handlerClearState}>cancel</button>
      </div>
      <ul>
        {handlerFilterTasks().map((element) => (
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
