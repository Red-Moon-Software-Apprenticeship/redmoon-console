import Layout from '@/components/Layout/Layout'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getApprsForIndex } from '@/database/users/findUsers'

const MyProfile = async () => {
  const session = await getServerSession(authOptions);
  const apprs = await getApprsForIndex()  
  return (
   <Layout>
      <ul>



      </ul>

   </Layout>
  )
}

export default MyProfile