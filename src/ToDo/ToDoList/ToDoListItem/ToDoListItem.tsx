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
  const [radioChecked, setRadioChecked] = useState(props.active);

  const handleToggleActive = () => {
    reduxDispatch(TODO_TOGGLE_INACTIVE({ id: props.id }));
    setRadioChecked((state) => !state);
  };

  return (
    <li className={styles.listItem} id={props.id}>
      <label htmlFor="checkbox" onClick={handleToggleActive}>
        <input type="checkbox" name="checkbox" checked={!radioChecked} readOnly />
        <p>{props.todo}</p>
      </label>
      <ToDoDelete id={props.id} />
    </li>
  );
}

export default ToDoListItem;
