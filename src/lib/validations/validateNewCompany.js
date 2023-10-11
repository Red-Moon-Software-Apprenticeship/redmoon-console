export const validateNewCompany = async (data) => {
  const {name, email, password, confirmedPassword, state, city, address } = data;
  const errors = [];
  
  if (!name){
    errors.push('Company name is required.')
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
    errors.push('Password and Confirm Password do not match.');
  }

  // Check State
  if (!state) {
    errors.push('State is required.');
  }

  // Check City
  if (!city) {
    errors.push('City is required.');
  }

  // Check Address
  if (!address) {
    errors.push('Company address is required.');
  }

  return errors;
}
