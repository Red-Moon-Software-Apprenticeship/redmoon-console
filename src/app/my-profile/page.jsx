import Layout from '@/components/Layout/Layout'
import UnderConstruction from '@/components/UnderConstruction'
import Link from 'next/link'

const MyProfile = () => {
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
        <li>
          <Link href='/apprentice-portal'>
            Apprentice Portal
          </Link>

        </li>
      </ul>
      <UnderConstruction />
    </Layout>
  )
}

export default MyProfile