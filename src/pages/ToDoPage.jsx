import { ToDoLayout } from '../components/TodoModule/ToDoLayout/ToDoLayout';
import { ToDoAppBar } from '../components/TodoModule/ToDoAppBar/ToDoAppBar';
import { TaskForm } from '../components/TodoModule/TaskForm/TaskForm';
import { TaskList } from '../components/TodoModule/TaskList/TaskList';

export const ToDoPage = () => {
  return (
    <ToDoLayout>
      <ToDoAppBar />
      <TaskForm />
      <TaskList />
    </ToDoLayout>
  );
};
