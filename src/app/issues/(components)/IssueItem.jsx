import React from 'react';
import '../issues.css';

const IssueItem = ({issue}) => {


  return (
    <li className="issue-item">
      <p>{issue.title}</p>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};

export default IssueItem;