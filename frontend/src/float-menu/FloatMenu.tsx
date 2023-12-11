import { Logout, NavBar } from "./style"

export const FloatMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <NavBar>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><Logout onClick={ handleLogout } >Logout</Logout></li>
      </ul>
    </NavBar>
  )
}
