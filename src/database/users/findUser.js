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



  if (role === 'company')  {
    const companyData =  await findCompanyProfileData(userId)
    const address = companyData.address

    return { ...companyData.user,address } 
 } else {

    return  await prisma.user.findUnique({
      select :  {
        state: true,
        city: true,
        techStack: true,
        bio: true
      }
      ,
      where:{ 
        id : userId
      }
    })
    
  }
}


export const findCompanyProfileData = async(userId) => {
  return await prisma.company.findUnique({
    select: {
      address: true,
      user:{
        select:{
          city: true,
          state: true,    
          bio: true,
          techStack: true,
        }

      }
    },
    where: {
      userId: userId
    }
  })
  


}

export const findApprBySlug = async (urlSlug) => (
  await prisma.user.findUnique({
    where:{
      urlSlug
    },
    select:{
      name: true,
      email: true,
      image: true,
      role: true,
      state: true,
      city: true,
      techStack: true,
      bio: true,
    }
  })


)

export const findUserBySlugCheck = async (urlSlug) => (
  await prisma.user.findUnique({
    where: {
      urlSlug
    },
    select:{
      id: true
    }
  }) 

)

export const findAdmins = async (userId) => (
  await prisma.user.findMany({
      where: {
          role: 'admin',
          NOT: {
              id: userId
          }
      },
      select: {
          id: true,
          name: true,
          email: true,
          subRole: true,
      }
  })
)

export const findCompanies = async() => (
  await prisma.user.findMany({
    where: {
      role: 'company'
    },
    select: {
      id: true,
      name: true,
      email: true,
      subRole: true,
      verifToken: {
        select: {
          token: true
        }
      }
    }

  })

)