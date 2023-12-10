export function GetId() {
  const getId = window.location.pathname.match(/\/profile\/(\d+)/);
  
  let id: number; 
  if (getId && getId[1]) {
    id = Number(getId[1]);
  } else {
    id = NaN;
  }
  return id;
}