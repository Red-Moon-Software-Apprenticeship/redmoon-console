import Layout from '@/components/Layout/Layout'
import { redirect } from 'next/navigation'

const MyProfile = async () => {

  redirect('/apprentices/0')
  const session = await getServerSession(authOptions);
  const apprs = await getApprsForIndex()  
  return (
   <Layout>




   </Layout>
  )
}

export default MyProfile