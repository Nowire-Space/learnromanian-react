import axiosBackendTest from '../axios-backend-test';

class SpecializationService {
  static getRegistrationSpecializations() {
    return axiosBackendTest
      .get( 'specialization/get')
      .then( response => { return response.data; } );
  }
}

export default SpecializationService;