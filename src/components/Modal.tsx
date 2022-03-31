import React from 'react'

//CSS
import styles from './Modal.module.css'


interface Props  {
    //jogar a lista pra frente do modal
    children: React.ReactNode;

}

const Modal = ({children}: Props) => {

  //fechar o modal
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
  };

  return (
    <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <h2>Texto Modal</h2>
            {children}
        </div>
    </div>
  );
};

export default Modal;