import { Route, Routes } from "react-router-dom"
import { Profile } from "./profile/Profile"

function App() {
 
  return (
    <Routes>
      <Route index element={<h1>Login</h1>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  )
}

export default App
