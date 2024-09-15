import { Outlet } from "react-router-dom"
import Sidebar from "./includes/Sidebar/Sidebar"
import Navbar from "./includes/Navbar/Navbar"
import Recommendations from "./includes/Sidebar/Recommendations"
function App() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-5 relative min-h-[200vh]">
        <Sidebar />
        <Outlet />
        <Recommendations />
      </main>
    </>
  )
}

export default App
