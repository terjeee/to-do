import { useDispatch } from "react-redux";
import { TODO_REMOVE } from "../../store/slices/sliceToDo";

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
    <button id={props.id} onClick={handleDeleteToDo}>
      X
    </button>
  );
}

export default ToDoDelete;
