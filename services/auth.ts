/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import callAPI from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignup(data: FormData) {
  const ENDPOINT = 'auth/signup';

  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}`;

  return callAPI({
    url,
    data,
    method: 'POST',
  });
}

export async function setLogin(data: LoginTypes) {
  const ENDPOINT = 'auth/signin';

  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}`;

  return callAPI({
    url,
    data,
    method: 'POST',
  });
}
