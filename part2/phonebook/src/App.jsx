import { useState, useEffect } from "react"
import personService from "./services/persons"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [notification, setNotification] = useState({ message: null, type: null })

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons))
  }, [])

  const showNotification = (message, type = "success") => {
    setNotification({ message, type })
    setTimeout(() => setNotification({ message: null, type: null }), 5000)
  }

  return (
    <>
      <Notification notification={notification} />
      <div style={{minHeight: '100vh', backgroundColor: '#f6f7f8', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif'}}>
        {/* Header Section */}
        <header style={{padding: '1.5rem 1.5rem 1.5rem 1.5rem'}}>
          <h1 style={{color: '#0f172a', fontSize: '2.25rem', fontWeight: '800', lineHeight: '1.25'}}>Phonebook</h1>
        </header>

        {/* Add Contact Form Section */}
        <section style={{padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
          <PersonForm
            persons={persons}
            setPersons={setPersons}
            newName={newName}
            setNewName={setNewName}
            newNumber={newNumber}
            setNewNumber={setNewNumber}
            showNotification={showNotification}
          />
        </section>

        {/* Visual Separator */}
        <div style={{height: '2rem'}}></div>

        {/* Search Section */}
        <section style={{padding: '0 1.5rem'}}>
          <Filter filter={filter} setFilter={setFilter} />
        </section>

        {/* Contact List Section */}
        <section style={{flex: 1, padding: '1.5rem 1.5rem 3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <Persons
            persons={persons}
            filter={filter}
            setPersons={setPersons}
            showNotification={showNotification}
          />
          {/* Empty State hint */}
          <div style={{marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4}}>
            <p style={{fontSize: '0.875rem', color: '#64748b'}}>End of contacts</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
