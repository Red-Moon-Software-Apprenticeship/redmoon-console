const faker = require('faker');


const generateMockApprs = (num) => {
    const res = [];
    const stackOptions = [
        'Python', 'Django', 'React', 'JavaScript', 'Node.js', 'Vue.js',
        'Flask', 'Springboot', 'Java', 'Rust', 'Rocket', 'Express', 'Next.js'
        ]
    for (let i = 0; i < num; i ++){
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const fullName = `${firstName} ${lastName}`;
        const email = faker.internet.email(firstName, lastName, 'example.com')
        const userData = {
            name: fullName,
            email: email,
            hashedPassword: 'Password123',
            role: "apprentice",
            emailVerified: new Date(Date.now()),
            state: faker.address.state(),
            city: faker.address.city(),
            techStack: [faker.random.arrayElement(stackOptions), 
                        faker.random.arrayElement(stackOptions), 
                        faker.random.arrayElement(stackOptions)],
            bio: faker.lorem.sentence(),
          };
      
          const roleData = {
            firstName: firstName,
            lastName: lastName,
            level: faker.datatype.number({ min: 1, max: 5 })
          };

          res.push({ userData, roleData})

        }

    return res;
}

module.exports= {generateMockApprs: generateMockApprs}