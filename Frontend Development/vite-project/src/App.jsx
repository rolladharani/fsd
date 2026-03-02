
import './App.css'
import axios from 'axios'
function App() {
   let baseurl="http://localhost:3000"
    const fetchdata=()=>{
      axios.get(`${baseurl}/get-stu`)
      .then((result)=>{console.log(result.data)})
      .catch((error)=>{console.log(error)})
    }
    const myuser={
      name:"Dharani",
      city:"KKD2"
    }
    const AddData=()=>{
      axios.post(`${baseurl}/add-user`,myuser)
      .then((result)=>{console.log(result.data)})
      .catch((error)=>{console.log(error)})
    }

  return (
    <>
    <h1>Hello Frontend!!</h1>
    <button onClick={fetchdata}>Fetch Data</button>
    <button onClick={AddData}>Add Data</button>
    </>
  )
}

export default App
