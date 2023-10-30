const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hash } = require('bcrypt');
const { generateMockApprs } = require('./fakeApprentice');
const { generateUrlSlug } = require('./utils');


const createUserAndRole = (userData, roleData, relation) => {

  const newData = { ...userData };
  newData[relation] = { create: roleData };

  return prisma.user.create({
    data: newData
  })
}

const users = [{
  userData: {
    name: "Luke Hovee",
    email: "lhovee@redmoon.com",
    hashedPassword: 'Password123',
    role: "admin",
    state: "California",
    city: "Los Angeles",
    techStack: ["JavaScript", "React", "Node.js"],
    emailVerified: new Date(Date.now()),
    bio: "I am the admin of this platform.",
    urlSlug: "luke-hovee-1",

  },
  roleData: {
    firstName: "Luke",
    lastName: "Hovee"
  }
},
{
  userData: {

    name: "Ronald McDonald",
    email: "apprentice@example.com",
    hashedPassword: 'Password123',
    role: "apprentice",
    state: "New York",
    city: "New York City",
    emailVerified: new Date(Date.now()),
    techStack: ["Python", "Django", "React"],
    bio: "I am an aspiring developer looking for opportunities.",
    urlSlug: `ronald-mcdonald-2`
  },
  roleData: {
    firstName: 'Ronald',
    lastName: 'McDonald',
    level: 1
  }
}, {
  userData: {
    name: "Horrible Stack Company",
    email: "crapstack@painfulcoding.com",
    emailVerified: new Date(Date.now()),
    hashedPassword: 'Password123',
    role: "company",
    state: "Texas",
    city: "Austin",
    techStack: ["Java", "Spring Boot", "Angular"],
    bio: "We are a tech company looking for talent.",
    urlSlug: 'horrible-stack-3'

  },
  roleData: {
    address: "102 Market St 94112"
  }
},
]


async function main(users) {
  users = [...users, ... await generateMockApprs(30)]
  for (let user of users) {
    const { userData, roleData } = user;
    userData.hashedPassword = await hash(userData.hashedPassword, 11);
    const role = userData.role;
    await createUserAndRole(userData, roleData, role);

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
