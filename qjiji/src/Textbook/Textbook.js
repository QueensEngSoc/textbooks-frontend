import React from 'react';
import './Textbook.css';


const textbook = (props) => {
    return (
        <div className="Textbook">
            <h2>{props.courseName} textbook</h2>
            <h3>Seller's Email: {props.email}</h3>
            <p>{props.description}</p>
        </div>
    )
};

export default textbook;