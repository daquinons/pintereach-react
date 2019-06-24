export const isLoggedIn = () => {
  return !!localStorage.getItem('pintereachToken');
};

export const setToken = token => {
  localStorage.setItem('pintereachToken', token);
};

export const clearToken = () => {
  localStorage.removeItem('pintereachToken');
}
