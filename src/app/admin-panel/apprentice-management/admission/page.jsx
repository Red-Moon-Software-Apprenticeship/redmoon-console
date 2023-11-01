import React from 'react';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { getApplicantApprs } from '@/database/users/findUsers';
import ApproveButton from './ApproveButton'
import ToggleModalBtn from '@/components/ToggleModalBtn';
import VerifModal from './VerifModal';
import '../../adminpanel.css'
const Admission = async () => {

  const session = await getServerSession(authOptions)

  if (!session?.user || (session?.user?.role !== 'admin' && session?.user?.subRole !== 'student lead')) {
    redirect('/')
  }
  const applicants = await getApplicantApprs()
  return (
    <Layout>
      <h1>Approve Git Pull Requests</h1>

      <div className="flex-center">

        <table id='admin-page-table'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Issue Link</th>
              <th>Approved? </th>
              <th>Manual Verification</th>
            </tr>
            {applicants.map((applicant, idx) =>
              <tr key={idx}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant?.apprentice[0]?.githubIssue?.url}</td>
                <td><ApproveButton userId={applicant.id} /></td>
                <td>
                  <ToggleModalBtn
                    innerText = {`${applicant.emailVerified ? 'Verified' : "Unverified"}`}
                    className = {`${ applicant.emailVerified? 'read-only-input': ''}`}
                    ModalComponent={VerifModal}
                    modalProps={{userId: applicant.id}}
                  /> 


                </td>
              </tr>

            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Admission;

