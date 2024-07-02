import Chai from "./Chai"

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
function App() {
  const username="welcome to likitha's first react experimental app"
  return (
    <>
    <Chai/>
    <h1>the following case is from app function</h1>
    <p>{username}</p>
    </>
  )
}

export default App
