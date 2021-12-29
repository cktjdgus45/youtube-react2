import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
    const inputRef = React.createRef();
    const onClick = () => {
        const query = inputRef.current.value;
        onSearch && onSearch(query);
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." />
            <button onClick={onClick} className={styles.button} type="submit">
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}
export default SearchHeader;