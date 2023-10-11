export const validateNewAppr = async ( data) => {
  const { firstName, lastName, email, password, confirmedPassword, state, city } = data;
  const errors = [];

  // Check First Name
  if (!firstName) {
    errors.push('First Name is required.');
  }

  // Check Last Name
  if (!lastName) {
    errors.push('Last Name is required.');
  } 

  // Check Email
  if (!email) {
    errors.push('Email is required.');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.push('Invalid email format.');
  }

  // Check Password
  if (!password) {
    errors.push('Password is required.');
  } else if (password.length < 6) {
    errors.push('Password should be at least 6 characters long.');
  }

  // Check Confirm Password
  if (password !== confirmedPassword) {
    errors.push('Password and Password Confirmation do not match.');
  }

  // Check State
  if (!state) {
    errors.push('State is required.');
  }

  // Check City
  if (!city) {
    errors.push('City is required.');
  }

  return errors;
}
