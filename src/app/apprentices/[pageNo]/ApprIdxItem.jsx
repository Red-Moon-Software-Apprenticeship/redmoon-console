import React from 'react';
import '../appridx.css';
import Image from 'next/image';
import Link from 'next/link';



const ApprIdxItem = ({ appr }) => {
    const { firstName, lastName, level } = appr;
    const { image, techStack, city, state, email } = appr.user;
    
    return (
        <li className='appr-card'>
            <Image src={image ?? ''} alt={`${firstName} ${lastName}`} className="appr-image" />
            <Link href={`/apprentice/${email}`} className='cursor-events'>
                <div className="appr-info">
                    <h3>{`${firstName} ${lastName}`}</h3>
                    <p>Level: {level}</p>
                    <p>Tech Stack: {techStack.join(', ')}</p>
                    <p>Location: {`${city}, ${state}`}</p>
                </div>
            </Link>
        </li>
    );
};

export default ApprIdxItem;
