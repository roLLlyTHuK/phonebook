import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { getTodos, getTodoStatusFilter } from '../../../redux/todo/selectors';
import css from './TaskList.module.css';
import { statusFilters } from '../../../redux/todo/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTodos);
  const statusFilter = useSelector(getTodoStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  // console.log("visibleTasks :>> ", visibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
