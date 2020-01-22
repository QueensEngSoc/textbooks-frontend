import React from 'react';

const textbook = (props) => {
    return (
        <div>
            <h2>{props.courseName} textbook</h2>
            <h3>Seller's Email: {props.email}</h3>
            <p>{props.description}</p>
        </div>
    )
};

export default textbook;