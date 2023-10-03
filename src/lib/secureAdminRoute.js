import { getServerSession } from 'next-auth';
import { authOptions} from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'


export const secureAdminServerRoute = async () =>{

    const session = await getServerSession(authOptions);
    if (!session || !session.user){
        redirect('/api/auth/signin')
    } else if (session.user.role !== 'admin'){
        redirect('/')
    }
}
    