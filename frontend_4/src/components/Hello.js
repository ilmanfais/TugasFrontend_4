import React from 'react';
import './hello.css';

const Hello = (props) => {
    const nama = props.nama;
    return (
        <div>
            <h1>Selamat Datang</h1>
            <p>{nama}</p>
        </div>
    );
}

export default Hello;
