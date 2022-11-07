import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADD } from "../../store/slices/sliceToDo";

import IconPlus from "../../assets/IconPlus";
import Modal from "../../components/Modal";

import styles from "./ToDoAdd.module.scss";

export default function ToDoHeader() {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  const handleSubmitToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newToDo = String(refInput.current?.value);
    dispatch(TODO_ADD({ todo: newToDo }));
    setShowModal((state) => !state);
  };

  return (
    <>
      <button className={styles.btn} onClick={toggleModal}>
        <IconPlus />
      </button>
      <Modal show={showModal} toggleModal={toggleModal}>
        <form className={styles.modal} onSubmit={handleSubmitToDo}>
          <input ref={refInput} autoFocus />
          <button>Add</button>
        </form>
      </Modal>
    </>
  );
}
