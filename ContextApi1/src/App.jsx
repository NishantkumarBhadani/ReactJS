import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UsercontextProvider from "./Context/UserContextProvider"
import React from "react"

function App() {
  const [count, setCount] = React.useState(0)

  return (
   <UsercontextProvider>
     <Login/>
     <Profile/>
   </UsercontextProvider>
  )
}

export default App
