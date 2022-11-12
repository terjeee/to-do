import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { TODO_ADD } from "../../store/slices/sliceToDo";

import CurrentDate from "./CurrentDate/CurrentDate";
import { IconPlus, IconMinus } from "../../assets/index";

import styles from "./ToDoAdd.module.scss";

export default function ToDoHeader() {
  const dispatch = useDispatch();
  const refInput = useRef<HTMLInputElement | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState(false);

  const toggleModal = () => {
    setShowInput((state) => !state);
  };

  const handleSubmitToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newToDo = String(refInput.current?.value);
    if (newToDo.length < 2 || newToDo.length > 45) return setError(true);
    setError(false);
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
      <form className={styles.inputField} onSubmit={handleSubmitToDo}>
        {showInput ? <input ref={refInput} spellCheck="false" autoFocus /> : null}
        {error && <p className={styles.error}>Entry needs to be between 2-45 characters</p>}
      </form>
    </>
  );
}
