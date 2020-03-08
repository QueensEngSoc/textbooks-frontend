import React from 'react';


const newposting = (props) => {
    return (
        <div className="Textbook">
            <form onSubmit={props.submitted}>

                <h4>Please fill the following fields</h4>
                <p>Enter the name of the textbook</p>
                <input type='text' name='book_name' required />
                <br/>
                <br/>

                <p>What course uses this textbook</p>
                <input type='text' name='book_course' required />
                <br/>
                <br/>

                <p>Enter your contact email</p>
                <input type='email' name='contact_email' required />
                <br/>
                <br/>

                <p>Briefly describe the condition of this textbook</p>
                <input type='text' name='book_condition' required />
                <br/>
                <br/>

                <p>What is the price of this textbook (in number format)</p>
                <input type='number' name='book_price' required />
                <br/>
                <br/>

                <p>What is your name</p>
                <input type='text' name='contact_name' required />
                <br/>
                <br/>

                <p>What is your phone number</p>
                <input type='text' name='contact_number' required />
                <br/>
                <br/>

                <p>Additional information</p>
                <input type='text' name='description' />
                <br/>
                <br/>
                <input type='submit' value='Submit Posting' required />
            </form>
        </div>
    )
};

export default newposting;