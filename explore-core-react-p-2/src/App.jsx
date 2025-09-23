import Batsman from './Batsman'
import './App.css'
import Users from './User'
function App() {
  function handleClick(){
    alert('Clicked')
  }

  const handleClick3 = () =>{
    alert('clicked 3')
  }
  return (
    <>

      <h1>Vite + React</h1>
      <Users></Users>
      <Batsman></Batsman>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick3}>Click2</button>
    </>
  )
}

export default App
