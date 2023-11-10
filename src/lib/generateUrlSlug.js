

export const generateUrlSlug = async (prefix, slugCheck) => {
    let randomInt = Math.floor(Math.random() * 100000);
    let newSlug = `${prefix}-${randomInt}`
    let entryBySlug = await slugCheck(newSlug)

    while (entryBySlug) {
        randomInt = Math.floor(Math.random() * 100000);
        newSlug = `${prefix}-${randomInt}`
        entryBySlug = await slugCheck(newSlug)
    }

    return newSlug;

}