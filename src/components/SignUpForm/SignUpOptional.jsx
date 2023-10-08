import React from 'react';

//Currently not used in prod, just for refernece
const SignUpOptional = () => {


    return (
        <>
            <div>
                <label>Tech Stack (comma-separated):</label>
                <input type="text" name="techStack" />
            </div>

            <div>
                <label>Bio:</label>
                <textarea name="bio"></textarea>
            </div>

        </>
    );
};

export default SignUpOptional;