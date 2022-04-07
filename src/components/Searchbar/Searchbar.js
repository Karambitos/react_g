import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import styles from '../Searchbar/Searchbar.module.css';

function Searchbar({ onSubmit }) {
    const [textMessage, setTextMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(textMessage)
        setTextMessage('');
    }
    const handleInputChange = (event) => setTextMessage(event.currentTarget.value);

    return (
        <header className={styles.searchbar}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.searchbarBtn}>
                    <SearchIcon width='16' height='16' />
                </div>
                <input
                    value={textMessage}
                    onChange={handleInputChange}
                    type='text'
                    autoComplete='off'
                    autoFocus
                    placeholder='Search images and photos'
                />
            </form>
        </header>
    )
}

export { Searchbar }

