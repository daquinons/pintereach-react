export const isLoggedIn = () => {
  return !!getToken();
};

export const setToken = token => {
  localStorage.setItem('pintereachToken', token);
};

export const getToken = () => {
  return localStorage.getItem('pintereachToken');
}

export const clearToken = () => {
  localStorage.removeItem('pintereachToken');
}
