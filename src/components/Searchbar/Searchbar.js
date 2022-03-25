import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import styles from '../Searchbar/Searchbar.module.css';

export default function Searchbar({ onSubmit }) {

    const [textMessage, setTextMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(textMessage)
        setTextMessage('');
    }

    const handleInputChange = (event) => {
        setTextMessage(event.currentTarget.value);
    };

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

// import { Component } from 'react'
// import { ReactComponent as SearchIcon } from '../../icons/search.svg'

// import styles from '../Searchbar/Searchbar.module.css';

// export class Searchbar extends Component {
//     state = {
//         textMessage: '',
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit(this.state)
//         this.setState({ textMessage: '' })
//     };

//     handleInputChange = event => {
//         const { value } = event.currentTarget;
//         this.setState({ textMessage: value });
//     };

//     reset = () => {
//         this.setState({ textMessage: '' })
//     };


//     render() {
//         const { textMessage } = this.state;

//         return (
//             <header className={styles.searchbar}>
//                 <form className={styles.form} onSubmit={this.handleSubmit}>
//                     <div className={styles.searchbarBtn}>
//                         <SearchIcon width='16' height='16' />
//                     </div>
//                     <input
//                         value={textMessage}
//                         onChange={this.handleInputChange}
//                         type='text'
//                         autoComplete='off'
//                         autoFocus
//                         placeholder='Search images and photos'
//                     />
//                 </form>
//             </header>
//         )
//     }
// }
