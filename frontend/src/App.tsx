import { Route, Routes } from "react-router-dom"
import { Profile } from "./profile/Profile"
import { Login } from "./login/Login"
import { Home } from "./home/Home"

function App() {
 
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/user" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
