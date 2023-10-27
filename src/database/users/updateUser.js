import {prisma} from '../db'


//Used for verifying your own status
export const updateSelfVerifStatus = async (userId, role) => (

    await prisma.user.update({
        where: {
            id: userId
        },
        
        data:{ 
            emailVerified: new Date(Date.now()),
            subRole: role === 'apprentice' ? 'unmerged issue' : ''
        }
    })
)


//Used on the admins side for force verifying a user.
export const updateUserVerifStatus = async (userId, emailVerified) => ( 

    await prisma.user.update({
        where: {
            id: userId 
        },
        data:{
            emailVerified
        }
    })
)

export const updateApprAdmission = async(userId, subRole) =>(

    await prisma.user.update({
        where: {
            id: userId
        },
        data:{
            subRole
        },
        select:{
            name: true,
        }
    })   
)


export const updateUserProfileData = async(userId, data)=> (
    await prisma.user.update({
        where: {
            id: userId
        },
        data,
        select: {
            id: true,
        }

    })

)