import React, { useEffect } from "react";

import styles from "./Modal.module.scss";

interface Props {
  children?: React.ReactNode;
  show?: boolean;
  toggleModal?: () => void;
}

function InputModal(props: Props) {
  if (!props.show) return null;

  return (
    <div className={styles.modal} onClick={props.toggleModal}>
      <div className={styles.content} onClick={(event) => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

export default InputModal;
