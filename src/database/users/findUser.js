import { prisma } from '@/database/db';

export const findUserByEmail = (email) => (
  prisma.user.findUnique({
    where: {
      email: email
    }
  })
)

//WARNING, DO NOT CALL THIS WITHOUT DOING A CHECK TO SEE IF THIS IS MADE FROM THE SAME USER
//WE DO NOT WANT PEOPLE TO HAVE ACCESS TO OTHER USERS' PASSWORDS
export const findUsersPassword = async (userId) => (

  await prisma.user.findUnique({
    select: {
      hashedPassword: true,
    },
    where: {
      id: userId
    }

  }))

export const findUserProfileData = async(userId, role) => {

  const data =   {
      state: true,
      city: true,
      techStack: true,
      bio: true
      
    }

  if (role === 'company'){
    data[company] = { 
      address: true
    }

  }

  return  await prisma.user.findUnique({
    select : data,
    where:{ 
      id : userId
    }
  })
  
}