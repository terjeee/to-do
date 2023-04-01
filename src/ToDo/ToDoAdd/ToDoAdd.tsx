import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { TODO_ADD } from "../../store/slices/sliceToDo";

import CurrentDate from "./CurrentDate/CurrentDate";

import styles from "./ToDoAdd.module.scss";
import Slider from "../../components/Slider";

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
      if (input.length < 2 || input.length > 45) return setError(true);
      setError(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [input]);

  const handleSubmitToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) return;
    if (input.length === 0) return setError(true);

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
        <Slider onChange={toggleShowInput} checked={showInput} />
      </div>
      {showInput && (
        <>
          <div className={`${styles.form} ${styles.error}`}>
            <form className={styles.inputField} onSubmit={handleSubmitToDo}>
              <input value={input} onChange={handleSetInput} spellCheck="false" />
              {/* {input.length > 1 && !error && <button></button>} */}
            </form>
            {error && <p className={styles.errorMsg}>Entry needs to be between 2-45 characters</p>}
          </div>
        </>
      )}
    </>
  );
}
