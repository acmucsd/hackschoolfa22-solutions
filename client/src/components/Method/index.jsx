import React from 'react';
import './style.css';

const Method = ({ id }) => {

    return (
        <select id={id} name={id}>
            <option>Cash</option>
            <option>Credit</option>
            <option>Debit</option>
            <option>Check</option>
            <option>Crypto</option>
        </select>
    );
};

export default Method;
