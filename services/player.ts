import axios from 'axios';
import callAPI from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedGame() {
  const ENDPOINT = 'players/landingpage';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetailVoucher(id: any) {
  const ENDPOINT = `players/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getGameCategory() {
  const ENDPOINT = 'players/category';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function setCheckout(data: CheckoutTypes) {
  const ENDPOINT = 'players/checkout';
  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}
