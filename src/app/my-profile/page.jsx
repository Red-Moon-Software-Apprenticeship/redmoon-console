import Layout from '@/components/Layout/Layout'
import UnderConstruction from '@/components/UnderConstruction'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from '../api/auth/[...nextauth]/route'
import ApprProfileOptions from './ApprProfileOptions'
import CompanyProfileOptions from './CompanyProfileOptions'
import AdminProfileOptions from './AdminProfileOptions'

const MyProfile = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  

  const mapComponent = {
      'admin' : <AdminProfileOptions/>,
      'apprentice': <ApprProfileOptions/>,
      'company': <CompanyProfileOptions/>
  }

  const roleBasedOption = mapComponent[role]
  
  return (
    <Layout>
      <ul>
        <li>
          <Link href='/my-profile/edit'>
            Edit profile
          </Link>
        </li>
        <li>
          <Link href='/my-profile/account-settings'>
            Account Settings
          </Link>
        </li>
        {roleBasedOption} 
      </ul>
      <UnderConstruction />
    </Layout>
  )
}

export default MyProfile