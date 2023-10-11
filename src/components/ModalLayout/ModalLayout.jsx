"use client"
import styles from './modallayout.module.css'
import React from 'react';

const ModalLayout = ({children, toggleModal}) => {
    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleModal()
    }

    return (

        <div id={styles.overlay} className='flex-center' onClick={handleOnClick}>
            {children}
        </div>    
    )
}

export default ModalLayout;