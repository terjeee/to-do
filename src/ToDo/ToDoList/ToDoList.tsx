import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { stateToDo } from "../../store/slices/sliceToDo";

import ToDoListItem from "./ToDoListItem/ToDoListItem";

import styles from "./ToDoList.module.scss";

export default function ToDoList() {
  const toDoList = useSelector(stateToDo);
  const [filter, setFilter] = useState("all");

  const handleSetFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(String(event.currentTarget.getAttribute("data-filter")));
  };

  return (
    <div className={styles.list}>
      <ul>
        {toDoList
          .filter((todo) => {
            if (filter === "all") return todo;
            return filter === "active" ? todo.active : !todo.active;
          })
          .map((todo) => (
            <ToDoListItem key={todo.id} id={todo.id} todo={todo.todo} active={todo.active} />
          ))}
      </ul>
      <div className={styles.control}>
        <button onClick={handleSetFilter} data-filter={"all"}>
          All
        </button>
        <button onClick={handleSetFilter} data-filter={"active"}>
          Active
        </button>
        <button onClick={handleSetFilter} data-filter={"completed"}>
          Completed
        </button>
      </div>
    </div>
  );
}
