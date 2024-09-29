
export const checkErrorValidate = (email, password) => {
    let isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    let isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)

    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    return null
}