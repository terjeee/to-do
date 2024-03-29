import { useDispatch } from "react-redux";
import { TODO_REMOVE } from "../../../../store/slices/sliceToDo";

import styles from "./ToDoDelete.module.scss";

interface Props {
  id: string;
}

function ToDoDelete(props: Props) {
  const reduxDispatch = useDispatch();

  const handleDeleteToDo = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = event.currentTarget.id;
    reduxDispatch(TODO_REMOVE({ id: targetId }));
  };

  return (
    <button className={styles.btnDelete} id={props.id} onClick={handleDeleteToDo}>
      ❌
    </button>
  );
}

export default ToDoDelete;
