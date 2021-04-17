import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const submit=(e)=>{
    e.preventDefault()
    setPersons([
      ...persons,
      {name: newName}
    ])
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
          <button onClick={submit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>{
        return (
          <Person key={person.name} name={person.name}/>
        )
      })}
    </div>
  )
}
const Person=({name})=>{
  return <> {name}<br/></>
}

export default App