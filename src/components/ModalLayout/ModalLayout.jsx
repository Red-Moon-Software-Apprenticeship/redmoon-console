"use client"
import styles from './modallayout.module.css'
import React from 'react';

const ModalLayout = ({children, toggleModal}) => {
    return (

        <div id={styles.overlay} className='flex-center' onClick={toggleModal}>
            {children}
        </div>    
    )
}

export default ModalLayout;