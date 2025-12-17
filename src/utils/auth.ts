export const getToken = () => localStorage.getItem('auth_token');
export const isLoggedIn = () => !!getToken();
export const logout = () => {
  localStorage.removeItem('auth_token');
  window.location.href = '/';
};
