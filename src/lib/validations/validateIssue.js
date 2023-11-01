export const validateIssue = async (data) => {
    let errors = [];

    if (!data.title || data.title.trim().length === 0) {
        errors.push({ field: 'title', message: 'Title is required.' });
    } else if (data.title.length > 100) {
        errors.push({ field: 'title', message: 'Title is too long (maximum 100 characters).' });
    }

    if (!data.description || data.description.trim().length === 0) {
        errors.push({ field: 'description', message: 'Description is required.' });
    }

    

    return errors;
};
