"use client"
import React, { useState } from 'react';

const IssueSubmissionForm = () => {
  const [issueURL, setIssueURL] = useState('')
  const formAction = (data)=>{
    
  }

  return (
    <form action={formAction}>
        <label htmlFor='issueUrl'>Issue URL:</label>
        <input name='issueUrl' type="text" value={issueURL} onChange={(e)=>setIssueURL(e.target.value)}/>
        <button>Submit</button>
    </form>
    );
};

export default IssueSubmissionForm;