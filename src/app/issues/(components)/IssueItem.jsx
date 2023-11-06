import React from 'react';
import '../issues.css';
import Link from 'next/link';
import ToggleModalBtn from '@/components/ToggleModalBtn';
import DeleteIssueModal from './DeleteIssueModal';

const IssueItem = ({ userId, issue }) => {
  const { title, companyId, urlSlug, id} = issue;
   
  return (
    <li className="issue-item flex-between">
      <p>{title}</p>
      <div>

          <Link href={`issues/edit-issue/${urlSlug}`}>
        <button>
            Edit
        </button>
          </Link>
          
        <ToggleModalBtn
          innerText={'Delete'}
          ModalComponent={DeleteIssueModal}
          modalProps={{issueId: id, userId}}
        /> 
      </div>
    </li>
  );
};

export default IssueItem;