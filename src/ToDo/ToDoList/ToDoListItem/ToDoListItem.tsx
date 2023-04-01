import { useState } from "react";

import { useDispatch } from "react-redux";
import { TODO_TOGGLE_INACTIVE } from "../../../store/slices/sliceToDo";

import ToDoDelete from "./ToDoDelete/ToDoDelete";

import styles from "./ToDoListItem.module.scss";

interface Props {
  id: string;
  todo: string;
  active: boolean;
}

function ToDoListItem(props: Props) {
  const reduxDispatch = useDispatch();
  const [toDoActive, setToDoActive] = useState(props.active);

  const handleToggleActiveToDo = () => {
    reduxDispatch(TODO_TOGGLE_INACTIVE({ id: props.id }));
    setToDoActive((state) => !state);
  };

  const cssChecked = !toDoActive ? "checked" : "";

  return (
    <li className={`${styles.listItem} ${styles[cssChecked]}`} id={props.id}>
      <label htmlFor="checkbox" onClick={handleToggleActiveToDo}>
        <input type="checkbox" name="checkbox" checked={!toDoActive} readOnly />
        <p className={styles.todoText}>{props.todo}</p>
      </label>
      <ToDoDelete id={props.id} />
    </li>
  );
}

export default ToDoListItem;
