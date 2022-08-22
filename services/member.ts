import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberOverview() {
  const ENDPOINT = 'players/dashboard';
  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getMemberTransactions(valueParams: string) {
  let params = '';
  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }
  const ENDPOINT = 'players/history';
  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTransactionsDetail(id: string, token: string) {
  const ENDPOINT = 'players/history';
  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

export async function updateProfile(data: FormData) {
  const ENDPOINT = 'players/profile';
  const url = `${ROOT_API}/${API_VERSION}/${ENDPOINT}`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}
