import React from 'react'
import { createPortal } from 'react-dom';
import styles from '../Loader/Loader.module.css';

const modalRoot = document.querySelector('#modal-root');
const LoaderWrapper = () => (
    <div className={styles.ldsLoader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);
export default function Loader({ handleBackdropClick }) {
    return createPortal(
        <div className={styles.LoaderBackdrop} onClick={handleBackdropClick}>
            <div className={styles.LoaderContent}>
                <LoaderWrapper />
            </div>
        </div>,
        modalRoot,
    )
}
