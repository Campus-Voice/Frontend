import { Outlet } from "react-router-dom"
import Sidebar from "./includes/Sidebar/Sidebar"
import Navbar from "./includes/Navbar/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-5 relative min-h-[200vh]">
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}

export default App
