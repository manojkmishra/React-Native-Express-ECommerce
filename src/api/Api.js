import wretch from 'wretch';
import { BASE_URL } from '../constants';

//export const customersApi = wretch('http://localhost:3000/api/v1/customers');
//export const customersApi = wretch('http://10.0.2.2:3000/api/v1/customers');
export const customersApi = wretch(`${BASE_URL}/customers`);
