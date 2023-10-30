import Layout from '@/components/Layout/Layout'
import { redirect } from 'next/navigation'

const MyProfile = async () => {

  redirect('/apprentices/0')
 
  return (
   <Layout>




   </Layout>
  )
}

export default MyProfile