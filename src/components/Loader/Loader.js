import { Component } from 'react'
import { createPortal } from 'react-dom';
import styles from '../Loader/Loader.module.css';

const modalRoot = document.querySelector('#modal-root');

const LoaderWrapper = () => (
    <div className={styles.ldsLoader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);

export class Loader extends Component {
    render() {
        return createPortal(
            <div className={styles.LoaderBackdrop} onClick={this.handleBackdropClick}>
                <div className={styles.LoaderContent}>
                    <LoaderWrapper />
                </div>
            </div>,
            modalRoot,
        )
    }
} 