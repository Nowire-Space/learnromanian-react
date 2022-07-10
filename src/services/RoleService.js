import axiosBackendTest from '../axios-backend-test';

class RoleService {
  static getRegistrationRoles() {
    return axiosBackendTest
      .get( 'role/get')
      .then( response => { return response.data; } );
  }
}

export default RoleService;