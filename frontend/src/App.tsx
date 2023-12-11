import { Route, Routes } from "react-router-dom"
import { Profile } from "./profile/Profile"
import { Login } from "./login/Login"
import { Home } from "./home/Home"
import { LayOut } from "./layout/LayOut"

function App() {
 
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<LayOut />} >
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
