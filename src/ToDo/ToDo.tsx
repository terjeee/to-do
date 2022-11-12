import ToDoAdd from "./ToDoAdd/ToDoAdd";
import ToDoList from "./ToDoList/ToDoList";

import styles from "./ToDo.module.scss";

export default function ToDo() {
  return (
    <section className={styles.todo}>
      <ToDoAdd />
      <ToDoList />
    </section>
  );
}
