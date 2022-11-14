import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { TODO_ADD } from "../../store/slices/sliceToDo";

import CurrentDate from "./CurrentDate/CurrentDate";
import { IconPlus, IconMinus } from "../../assets/index";

import styles from "./ToDoAdd.module.scss";

export default function ToDoHeader() {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(true);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const toggleShowInput = () => {
    setShowInput((state) => !state);
  };

  const handleSetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.length === 0) return setError(false);
      if (input.length < 5 || input.length > 45) return setError(true);
      setError(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input]);

  const handleSubmitToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) return;

    setError(false);
    dispatch(TODO_ADD({ todo: input }));
    setInput("");
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <CurrentDate />
          <h1>TODO</h1>
        </div>
        <button className={styles.btn} onClick={toggleShowInput}>
          {!showInput ? <IconPlus /> : <IconMinus />}
        </button>
      </div>
      {showInput && (
        <form className={styles.inputField} onSubmit={handleSubmitToDo}>
          <input onChange={handleSetInput} spellCheck="false" autoFocus />
          {error && <p className={styles.error}>Entry needs to be between 5-45 characters</p>}
        </form>
      )}
    </>
  );
}
