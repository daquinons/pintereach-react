import axios from 'axios';

export const axiosAuth = () => {
  const token = isLoggedIn()
    ? getToken()
    : 'false';

  const instance = axios.create({
    headers: {
      Authorization: token,
    },
  });

  return instance;
}


export const isLoggedIn = () => {
  return !!getToken() && getToken() !== "null";
};

export const setUserId = userId => {
  localStorage.setItem('pintereachUserId', userId);
}

export const getUserId = () => {
  return localStorage.getItem('pintereachUserId');
}

export const setToken = token => {
  localStorage.setItem('pintereachToken', token);
};

export const getToken = () => {
  return localStorage.getItem('pintereachToken');
}

export const clearToken = () => {
  localStorage.removeItem('pintereachToken');
}
