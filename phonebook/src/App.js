import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone:'123456789' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState('')

  const submit=(e)=>{
    e.preventDefault()
    let person = persons.find(person => person.name === newName);
    if(person !== undefined ){
      alert(`${newName} is already added to phonebook`)
    }
    else if(newName != '' && newPhone != ''){
      setPersons([
        ...persons,
        {name: newName,phone:newPhone}
      ])
    }
    else{
      alert("Debe de completar todos los campos")
    }
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        <div>
          phone: <input  value={newPhone} onChange={(e)=>setNewPhone(e.target.value)}/>
        </div>
        <div>
          <button onClick={submit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>{
        return (
          <Person key={person.name} name={person.name} phone={person.phone}/>
        )
      })}
    </div>
  )
}
const Person=({name,phone})=>{
  return <> {name} {phone}<br/></>
}

export default App