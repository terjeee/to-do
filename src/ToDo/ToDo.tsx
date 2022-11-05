import ToDoHeader from "./ToDoHeader/ToDoHeader";
import ToDoList from "./ToDoList/ToDoList";

import styles from "./ToDo.module.scss";

export default function ToDo() {
  return (
    <section className={styles.todo}>
      <div className={styles.wrapper}>
        <ToDoHeader />
        <ToDoList />
      </div>
    </section>
  );
}
