// import { MdClose } from 'react-icons/md';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import {
  deleteTodoLocally,
  toggleCompletedLocally,
} from '../../../redux/todo/taskSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodoLocally(task.id));
  const handleToggle = () => dispatch(toggleCompletedLocally(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
};
