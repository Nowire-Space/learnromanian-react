import axiosBackendTest from '../axios-backend-test';

class AuthService {
    static logIn( username, password ) {
        return axiosBackendTest
            .post( 'auth/login', { username, password } )
            .then( response => {
                if ( response.data.accessToken ) {
                    localStorage.setItem( 'user', JSON.stringify( response.data ) );
                }
                return response.data;
            } );
    }

    static logOut(  ) {
        localStorage.removeItem( 'user' );
    }

    register( name, familyName, phoneNumber, email, password ) {
        return axiosBackendTest.post( 'register', {
            name,
            familyName,
            phoneNumber,
            email,
            password
        } );
    }

    // getCurrentUser() {
    //     return JSON.parse( localStorage.getItem( 'user' ) );
    // }

    static getCurrentUser() {
        return JSON.parse( localStorage.getItem( 'user' ) );
    }
}

export default AuthService;