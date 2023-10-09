import React from 'react';

const SignUpDefaults = () => {


    return (
        <>
            <div>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" name="password" />
            </div>

            <div>
                <label>State:</label>
                <input type="text" name="state" />
            </div>

            <div>
                <label>City:</label>
                <input type="text" name="city" />
            </div>

        </>
    );
};

export default SignUpDefaults;