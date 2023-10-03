import Layout from '@/components/Layout/Layout';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions} from '@/app/api/auth/[...nextauth]/route'
import {redirect} from 'next/navigation'

const AdminPanel = async() => {
    const session = await getServerSession(authOptions);


    if (!session || !session.user){
        redirect('/')
    }
    console.log("SESSION HERE", session)
    return (
        <Layout>
            This is the admin panel
        </Layout>
    );
};

export default AdminPanel ;