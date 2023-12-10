export const HasToken = () => {
  const token = localStorage.getItem('token')
  const id = Number(token);
    if (!token) {
      window.location.href = '/login'
    }
    return id;
}