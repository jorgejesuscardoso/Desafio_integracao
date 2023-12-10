import { Route, Routes } from "react-router-dom"
import { Profile } from "./profile/Profile"

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  )
}

export default App
