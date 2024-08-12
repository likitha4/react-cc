import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React-context </h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
