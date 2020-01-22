import React from 'react';


const newposting = (props) => {
    return (
        <div className="Textbook">
            <form>
                <h4>Please fill the following fields</h4>
                <p>Enter the name of the textbook</p>
                <input type='text' name='name' />
                <br/>
                <br/>

                <p>Enter your contact email</p>
                <input type='text' name='email' />
                <br/>
                <br/>

                <p>Enter any additional information</p>
                <input type='text' name='description' />
                <br/>
                <br/>
                <input type='submit' value='Submit Posting' />
            </form>
        </div>
    )
};

export default newposting;