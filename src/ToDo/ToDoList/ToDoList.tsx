import { useDispatch } from "react-redux";
import { TODO_REMOVE } from "../../store/slices/sliceToDo";

import styles from "./ToDoList.module.scss";

interface Props {
  list: { id: string; todo: string }[];
}

export default function ToDoList(props: Props) {
  const reduxDispatch = useDispatch();

  const handleDeleteToDo = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = event.currentTarget.id;
    console.log(targetId);
    reduxDispatch(TODO_REMOVE({ id: targetId }));
  };

  return (
    <ul className={styles.list}>
      {props.list.map((todo) => (
        <li key={todo.id} id={todo.id} onClick={handleDeleteToDo}>
          {todo.todo}
        </li>
      ))}
    </ul>
  );
}
