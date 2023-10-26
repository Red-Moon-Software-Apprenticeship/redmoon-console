import React from 'react';

const SharedUserFields = ({ }) => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [bio, setBio] = useState('');

    return (
        <>
            <label htmlFor="city">City:</label>
            <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State:</label>
            <input
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />

            <label htmlFor="bio">Bio:</label>
            <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
        </>
    );
};

export default SharedUserFields;
