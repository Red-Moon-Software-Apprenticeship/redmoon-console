import React from 'react';
import Layout from '@/components/Layout/Layout';
import ApprSignUp, {createAppr} from '@/components/SignUpForm/ApprSignUp';
import Link from 'next/link';

const NewAppr = () => {


  return (
    <Layout>
        <div>
          <button>
            <Link href='/admin-panel/apprentice/apprentice-management'>
                Return to console
            </Link>
          </button>
        </div>
        <ApprSignUp createAppr={createAppr}/>
    </Layout>
    );
};

export default NewAppr;