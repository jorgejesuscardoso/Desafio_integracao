import { Route, Routes } from "react-router-dom"
import { Profile } from "./profile/ProfileContent"
import { Login } from "./login/Login"
import { Home } from "./home/Home"
import { LayOut } from "./layout/LayOut"
import { OtherUserProfile } from "./profile/OtherProfile"

function App() {
 
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<LayOut />} >
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<OtherUserProfile />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
