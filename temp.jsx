"use client";
import React from 'react';

const NextForm = () => {

    const formAction = async (formData) => {
        const res = await formAction();

        if (res?.errors) {
            // Handle errors
        } else {
            // Handle success
        }
    };

    return (
        <form onSubmit={formAction}>
            <label htmlFor="input1">
              Label 1
            </label>
            <input id="input1" type="text" />

            <label htmlFor="input2">
              Label 2
            </label>
            <input id="input2" type="text" />

            <label htmlFor="input3">
              Label 3
            </label>
            <input id="input3" type="text" />
        </form>
    );
};

export default NextForm;