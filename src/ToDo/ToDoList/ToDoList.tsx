import { useState } from "react";

import ToDoListItem from "./components/ToDoListItem";

import styles from "./ToDoList.module.scss";

interface Props {
  list: { id: string; todo: string; active: boolean }[];
}

export default function ToDoList(props: Props) {
  const [displayList, setDisplayList] = useState("all");

  return (
    <div>
      {displayList === "all" && (
        <ul className={styles.list}>
          {props.list.map((todo) => (
            <ToDoListItem key={todo.id} id={todo.id} todo={todo.todo} />
          ))}
        </ul>
      )}
      {displayList === "active" && (
        <ul>
          {props.list
            .filter((todo) => todo.active)
            .map((todo) => (
              <ToDoListItem key={todo.id} id={todo.id} todo={todo.todo} />
            ))}
        </ul>
      )}
      {displayList === "completed" && (
        <ul>
          {props.list
            .filter((todo) => !todo.active)
            .map((todo) => (
              <ToDoListItem key={todo.id} id={todo.id} todo={todo.todo} />
            ))}
        </ul>
      )}
      <div>
        <button onClick={() => setDisplayList("all")}>All</button>
        <button onClick={() => setDisplayList("active")}>Active</button>
        <button onClick={() => setDisplayList("completed")}>Completed</button>
      </div>
    </div>
  );
}
