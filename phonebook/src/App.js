import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone:'123456789' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [ filter, setFilter]=useState('')
  const submit=(e)=>{
    e.preventDefault()
    let person = persons.find(person => person.name === newName);
    if(person !== undefined ){
      alert(`${newName} is already added to phonebook`)
    }
    else if(newName !== '' && newPhone !== ''){
      setPersons([
        ...persons,
        {name: newName,phone:newPhone}
      ])
    }
    else{
      alert("Debe de completar todos los campos")
    }
    setNewName('')
    setNewPhone('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
      <PersonForm 
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        submit={submit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}
const Filter =({filter,setFilter})=>{
  return (
    <form>
      filter shown with <input value={filter} onChange={(e)=>setFilter(e.target.value)}/>
    </form>
  )
}
const PersonForm = ({newName,newPhone,setNewName,setNewPhone,submit})=>{
  return (
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
  )
}
const Persons =({persons,filter})=>{
  return (<>
    {persons.filter(person=>person.name.includes(filter)).map((person)=>{
      return (
        <Person key={person.name} name={person.name} phone={person.phone}/>
      )
    })}</>
  )
}
const Person=({name,phone})=>{
  return <> {name} {phone}<br/></>
}

export default App