import { Route, Routes } from "react-router-dom"
import { Profile } from "./components/profile/ProfileContent"
import { Login } from "./components/login/Login"
import { Home } from "./components/home/Home"
import { LayOut } from "./components/layout/LayOut"
import { Register } from "./components/register/Register"
import { ProfileEdit } from "./components/profile/ProfileEdit"

function App() {
 
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<LayOut />} >
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
