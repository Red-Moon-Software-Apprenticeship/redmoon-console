import React from 'react';
import '../issues.css';
import Link from 'next/link';
import ToggleModalBtn from '@/components/ToggleModalBtn';
import DeleteIssueModal from './DeleteIssueModal';

const IssueItem = ({ issue }) => {
  const { title, urlSlug } = issue;
  
  return (
    <li className="issue-item flex-between">
      <p>{issue.title}</p>
      <div>

          <Link href={`issues/edit-issue/${urlSlug}`}>
        <button>
            Edit
        </button>
          </Link>
          
        <ToggleModalBtn
          innerText={'Delete'}
          ModalComponent={DeleteIssueModal}
          modalProps={{}}
          id={''}
          className={''}
        /> 
      </div>
    </li>
  );
};

export default IssueItem;