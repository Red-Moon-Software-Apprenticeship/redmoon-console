"use server"
import { prisma } from '@/database/db';
import { createUserAndRole } from '@/database/users/createUser';
import React from 'react';

const createCompany = async (data) =>{
  
  await createUserAndRole({ })



}


const CompanySignUp = () => {

  return (
    <form>


    </form>
  );
};

export default CompanySignUp;