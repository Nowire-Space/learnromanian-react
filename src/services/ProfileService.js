import axiosBackendTest from '../axios-backend-test';

class ProfileService {
    static getProfile() {
        return axiosBackendTest
            .get( 'profile/get')
            .then( response => { return response.data; } );
    }
}

export default ProfileService;