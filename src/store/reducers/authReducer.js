const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_ERROR':
            return {
                ...state,
                authError: 'Signout Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            console.log('Sign Up Success');
            return {
                ...state,
                authError: null
            }
        default:
            return state
    }
}

export default authReducer;