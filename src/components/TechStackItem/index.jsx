import React from 'react';

const TechStackItem = ({ tech, idx, techStack, setTechStack }) => {
    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setTechStack(techStack.filter((_, i) => i !== idx))
    }

    return (
        <button onClick={handleOnClick}>{tech}</button>
    );
};

export default TechStackItem;