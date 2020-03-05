import React from 'react';
import './Textbook.css';


const textbook = (props) => {
    return (
        <div className="Textbook">
            <h2>{props.bookName}</h2>
            <h4>Course: {props.courseName}</h4>
            <h4>Asking Price: ${props.price}</h4>
            <h4>Book Condition: {props.bookCondition}</h4>
            <br/>
            <p>Contact information</p>
            <h4>Seller's Name: {props.contactName}</h4>
            <h4>Seller's Phone Number: {props.phoneNumber}</h4>
            <h4>Seller's Email: {props.email}</h4>
            <br/>
            <p>More Information</p>
            <h5>{props.description}</h5>
        </div>
    )
};

export default textbook;