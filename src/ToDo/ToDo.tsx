import { useSelector } from "react-redux";
import { stateToDo } from "../store/slices/sliceToDo";

import ToDoAdd from "./ToDoAdd/ToDoAdd";
import ToDoList from "./ToDoList/ToDoList";

import styles from "./ToDo.module.scss";

export default function ToDo() {
  const toDoState = useSelector(stateToDo);
  console.log(toDoState);

  return (
    <section className={styles.todo}>
      <ToDoAdd />
      <ToDoList list={toDoState} />
    </section>
  );
}
