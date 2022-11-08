import { useState } from "react";

import { useDispatch } from "react-redux";
import { TODO_TOGGLE_INACTIVE } from "../../../store/slices/sliceToDo";

import ToDoDelete from "../../../components/LisItem/ToDoDelete";

import styles from "./ToDoListItem.module.scss";

interface Props {
  id: string;
  todo: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function ToDoListItem(props: Props) {
  const reduxDispatch = useDispatch();
  const [radioChecked, setRadioChecked] = useState(false);

  const handleToggleActive = () => {
    reduxDispatch(TODO_TOGGLE_INACTIVE({ id: props.id }));
    setRadioChecked((state) => !state);
  };

  return (
    <li id={props.id}>
      <label htmlFor="checkbox" onClick={handleToggleActive}>
        <input type="checkbox" name="checkbox" checked={radioChecked} readOnly />
        {props.todo}
      </label>
      <ToDoDelete id={props.id} />
    </li>
  );
}

export default ToDoListItem;
