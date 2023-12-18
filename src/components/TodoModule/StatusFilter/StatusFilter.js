import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { statusFilters } from '../../../redux/todo/constants';
import { getTodoStatusFilter } from '../../../redux/todo/selectors';
import { setStatusFilter } from '../../../redux/todo/filtersSlice';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getTodoStatusFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
