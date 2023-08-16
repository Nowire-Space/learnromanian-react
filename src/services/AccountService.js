import axiosBackendTest from '../axios-backend-test';

class AccountService {
    static logIn( username, password ) {
        return axiosBackendTest
            .post( 'account/authenticate', { username, password } )
            .then( response => {
                if ( response.data.token ) {
                    console.log(response);
                    localStorage.setItem( 'user', JSON.stringify( response.data ));
                }
                return response.data;
            } );
    }

    static logOut(  ) {
        localStorage.removeItem( 'user' );
    }

    static register(email, firstname, lastname, phoneNumber, password, confirmPassword) {
        return axiosBackendTest.post( 'account/create', {
            'userFirstName': firstname,
            'userFamilyName': lastname,
            'userPhoneNumber': phoneNumber,
            'userEmail': email,
            'userPassword': password,
            'userPasswordCheck': confirmPassword
        } );
    }

    static validate( token ) {
        return axiosBackendTest.post( 'account/validate/'.concat(token) );
    }

    static reset( email ) {
        console.log('calling', email);
        return axiosBackendTest.post( 'account/password/reset', {email} );
    }

    static getCurrentUser() {
        return JSON.parse( localStorage.getItem( 'user' ) );
    }
}

export default AccountService;