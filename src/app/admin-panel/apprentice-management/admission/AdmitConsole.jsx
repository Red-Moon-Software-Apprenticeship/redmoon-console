import { prisma } from '@/database';
import React from 'react';
import ApproveButton from './ApproveButton';

const AdmitConsole = async () => {

    const applicants = await prisma.user.findMany({
        where: {
            role: 'apprentice',
            subRole: 'unmerged issue'
        },
        select: {
            id: true,
            name: true,
            email: true,
            apprentice: {
                select: {
                    githubIssue: {
                        select: {
                            url: true
                        }
                    }
                }
            }
        }
    })

    return (

        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Issue Link</th>
                    <th>Approved? </th>
                </tr>
                {applicants.map((applicant, idx) =>
                    <tr key={idx}>
                        <td>{applicant.name}</td>
                        <td>{applicant.email}</td>
                        <td>{applicant.apprentice[0].githubIssue[0]?.url}</td>
                        <ApproveButton userId={applicant.id}/>
                    </tr>

                )}
            </tbody>
        </table>
    );
};

export default AdmitConsole;