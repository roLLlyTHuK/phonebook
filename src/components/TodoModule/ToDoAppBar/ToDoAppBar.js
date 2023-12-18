import { StatusFilter } from '../StatusFilter/StatusFilter';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import css from './ToDoAppBar.module.css';

export const ToDoAppBar = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </div>
  );
};
