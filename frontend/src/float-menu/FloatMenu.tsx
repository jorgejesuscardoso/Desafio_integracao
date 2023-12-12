import { Lis, Logout, NavBar } from "./style"

export const FloatMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <NavBar>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#help">Help</a></li>
        <Lis><Logout onClick={ handleLogout } >Logout</Logout></Lis>
      </ul>
    </NavBar>
  )
}
