import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { TODO_ADD } from "../../store/slices/sliceToDo";

import CurrentDate from "../CurrentDate/CurrentDate";
import { IconPlus, IconMinus } from "../../assets/index";

import styles from "./ToDoAdd.module.scss";

export default function ToDoHeader() {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowInput((state) => !state);
  };

  const handleSubmitToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newToDo = String(refInput.current?.value);
    dispatch(TODO_ADD({ todo: newToDo }));
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <CurrentDate />
          <h1>TODO</h1>
        </div>
        <button className={styles.btn} onClick={toggleModal}>
          {!showInput ? <IconPlus /> : <IconMinus />}
        </button>
      </div>
      {showInput && (
        <form className={styles.inputField} onSubmit={handleSubmitToDo}>
          <input ref={refInput} autoFocus />
        </form>
      )}
    </>
  );
}
