import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
const getinfo=()=>{
  axios.get('http://localhost:5400/test')
  .then((res)=>{
    console.log(res.data);
    
  })
  .catch((err)=>{
    console.log(err);
    
  })
// alert('i23')
}
  return (
    
      <>
     <button onClick={getinfo}>Get Info</button>
      </>
  )
}

export default App
