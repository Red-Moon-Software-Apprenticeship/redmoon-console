import Layout from '@/components/Layout/Layout';
import React from 'react';
import Link from 'next/link';
const NewUser = () => {


  return (
    <Layout>
        <div id='' className=''>
            Please test new user sign up in postman. Another applicant has been assigned the responsibilities of putting together the sign up form
            <Link href={'https://github.com/Red-Moon-Software-Apprenticeship/redmoon-console/issues/3'} target='_blank'> See here</Link>
        </div>
    </Layout>
  );
};

export default NewUser;