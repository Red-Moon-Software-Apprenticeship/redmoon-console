"use client"
import React from 'react';
import AdminEditForm from './AdminEditForm';
import ApprEditForm from './ApprEditForm';
import CompanyEditForm from './CompanyEditForm';
import { useErrors, useSuccess } from '@/hooks';

const MapForm = ({ role, userId }) => {
  const [successMsg, setSuccessMsg, OnSuccess]  = useSuccess()
  const [errors, setErrors, clearErrorsEffect, Errors] = useErrors();
  
  const MAP_FORM_ACTION = {
    'apprentice': () => { },
    'admin': () => { },
    'company': () => { }
  }
  
  const serverAction = MAP_FORM_ACTION[role]
  
  const formAction = async(formData, clearForm) => {
      const res = await serverAction(formData, userId)
      if (res?.errors){
        setErrors(res?.errors)
      } else {
        setSuccessMsg("Succesfully updated user data")
        clearForm()
      }
  }


  const MAP_FORM = {
    'apprentice': <ApprEditForm formAction={formAction} />,
    'admin:': <AdminEditForm formAction={formAction} />,
    'company': <CompanyEditForm formAction={formAction} />
  }
  
  return (
    <>
      {MAP_FORM[role]}
      <OnSuccess successMsg={successMsg} />
      <Errors errors={errors} />
    </>
  );
};

export default MapForm;