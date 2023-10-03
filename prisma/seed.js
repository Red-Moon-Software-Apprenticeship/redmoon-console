const { PrismaClient } = require('@prisma/client');
const {hash } = require('bcrypt');
const prisma = new PrismaClient()


const users = [{
    name: "Luke Hovee",
    email: "lhovee@redmoon.com",
    hashedPassword: 'Password123',
    role: "admin",
    state: "California",
    city: "Los Angeles",
    techStack: ["JavaScript", "React", "Node.js"],
    bio: "I am the admin of this platform.",
  },
  {
    name: "Ronald McDonald",
    email: "apprentice@example.com",
    hashedPassword: 'Password123',
    role: "apprentice",
    state: "New York",
    city: "New York City",
    techStack: ["Python", "Django", "React"],
    bio: "I am an aspiring developer looking for opportunities.",
  },{
    name: "Horrible Stack Company",
    email: "crapstack@painfulcoding.com",
    hashedPassword: 'Password123',
    role: "company",
    state: "Texas",
    city: "Austin",
    techStack: ["Java", "Spring Boot", "Angular"],
    bio: "We are a tech company looking for talent.",
  }
]


async function main(users){

    for(let user of users){
        user.hashedPassword = await hash(user.hashedPassword, 11);
        await prisma.user.upsert({
                where: {email: user.email},
                update: {},
                create: {...user}
            })
    }

}

main(users)
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })