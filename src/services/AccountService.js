import axiosBackend from '../axios-backend';

class AccountService {
    static logIn( username, password ) {
        return axiosBackend
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
        return axiosBackend.post( 'account/create', {
            'userFirstName': firstname,
            'userFamilyName': lastname,
            'userPhoneNumber': phoneNumber,
            'userEmail': email,
            'userPassword': password,
            'userPasswordCheck': confirmPassword
        } );
    }

    static validate( token ) {
        return axiosBackend.post( 'account/validate/'.concat(token) );
    }

    static reset( email ) {
        console.log('calling', email);
        return axiosBackend.post( 'account/password/reset', {email} );
    }

    static getCurrentUser() {
        return JSON.parse( localStorage.getItem( 'user' ) );
    }
}

export default AccountService;