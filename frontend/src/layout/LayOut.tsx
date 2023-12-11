import { Outlet } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";

export function LayOut() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  )
}