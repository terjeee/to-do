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

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDoList));
  }, [toDoList]);

  const filteredList = toDoList?.filter((todo) => {
    if (filter === "all") return todo;
    return filter === "active" ? todo.active : !todo.active;
  });

  const cssActiveFilter = (val: string) => (filter === val ? "activeFilter" : "");

  return (
    <div className={styles.list}>
      <ul>
        {filteredList.map((todo) => (
          <ToDoListItem key={todo.id} id={todo.id} todo={todo.todo} active={todo.active} />
        ))}
      </ul>
      <div className={styles.control}>
        <button
          onClick={handleSetFilter}
          className={styles[cssActiveFilter("all")]}
          data-filter={"all"}
        >
          All
        </button>
        <button
          onClick={handleSetFilter}
          className={styles[cssActiveFilter("active")]}
          data-filter={"active"}
        >
          Active
        </button>
        <button
          onClick={handleSetFilter}
          className={styles[cssActiveFilter("completed")]}
          data-filter={"completed"}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
