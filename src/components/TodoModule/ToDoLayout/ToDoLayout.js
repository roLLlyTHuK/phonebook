import css from "./ToDoLayout.module.css";

export const ToDoLayout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
