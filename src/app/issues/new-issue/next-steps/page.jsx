import Link from 'next/link';
import React from 'react';

const NextSteps = () => {


  return (
    <Layout>
        <p>Thank you for reaching out to our apprentices for your issue</p>
        <p>You can proceed by inviting our <Link href='/apprentices/0'>apprentices</Link> to work on your project.</p>

    </Layout>
    );
};

export default NextSteps;