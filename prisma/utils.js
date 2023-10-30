const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const generateUrlSlug = async (name) => {
    name = name.toLowerCase().replace(/ /g, '-');

    let randomInt = Math.floor(Math.random() * 100000);
    let newSlug = `${name}-${randomInt}`
    return newSlug;
}

module.exports = { 
    generateUrlSlug: generateUrlSlug
}