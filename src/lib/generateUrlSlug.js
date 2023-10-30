import { findUserBySlugCheck } from "@/database/users/findUser"

export const generateUrlSlug = async (name) => {
    name = name.toLowerCase().replace(/ /g, '-');
    let randomInt = Math.floor(Math.random() * 100000);
    let newSlug = `${name}-${randomInt}`
    let userBySlug = await findUserBySlugCheck(newSlug)
    console.log(userBySlug)
    while (userBySlug) {
        randomInt = Math.floor(Math.random() * 100000);
        newSlug = `${name}-${randomInt}`
        userBySlug = await findUserBySlugCheck(newSlug)
    }

    return newSlug;
}