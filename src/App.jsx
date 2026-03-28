import { useState } from 'react'
import Child from './Child.jsx'
function App() {
  const [counts, setCounts] = useState(0)
  const [name, setName] = useState()
  const [age , setAge] = useState()
  const [address, setAddress] = useState()

  const handleNameChange = (newName) =>{
    setName(newName)
  }
  const handleAgeChange = (newAge) => {
  setAge (newAge)
  }
  const handleAddressChange = (newAddress) => {
    setAddress (newAddress)
  }

  return (
    <>
      <div className = "card">
        <button onClick= {() => setCounts((counts) => counts+1)}>
          counts was {counts}
        </button>
      </div>

        <div>
       
        <label>Name :</label><input type="text"  value= {name} onChange={(e) => setName(e.target.value)}/>
      <label> Age : </label><input type = 'number' value ={age} onChange={(e) => setAge(e.target.value)}/>
      <label> Address : </label><input type = "text" value= {address} onChange={(e) => setAddress(e.target.value)}/>
      
      </div>
      
      <Child name = {name} age= {age} address = {address} onUpdateName = {handleNameChange}  onUpdateAge = {handleAgeChange} onUpdateAddres={handleAddressChange}/>
    </>
  )
}

export default App
