import personService from "../services/persons"

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  showNotification,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const existingPerson = persons.find(p => p.name === newName)

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added. Replace the old number?`
      )

      if (!confirmUpdate) return

      const updatedPerson = {
        ...existingPerson,
        number: newNumber,
      }

      personService
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(
            persons.map(p =>
              p.id !== existingPerson.id ? p : returnedPerson
            )
          )
          showNotification(`Updated ${returnedPerson.name}`)
          setNewName("")
          setNewNumber("")
        })
        .catch(() => {
          showNotification(
            `Information of ${existingPerson.name} has already been removed from server`,
            "error"
          )
          setPersons(persons.filter(p => p.id !== existingPerson.id))
        })

      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        showNotification(`Added ${returnedPerson.name}`)
        setNewName("")
        setNewNumber("")
      })
  }

  return (
    <>
      {/* Name Input */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <label style={{position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0'}} htmlFor="name">Name</label>
        <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
          <span className="material-symbols-outlined" style={{position: 'absolute', left: '1rem', color: '#94a3b8', fontSize: '20px', userSelect: 'none'}}>person</span>
          <input
            style={{width: '100%', borderRadius: '1rem', border: 'none', backgroundColor: 'white', color: '#0f172a', height: '3.5rem', paddingLeft: '3rem', paddingRight: '1rem', fontSize: '1rem'}}
            id="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>
      </div>
      {/* Phone Number Input */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <label style={{position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0'}} htmlFor="phone">Phone Number</label>
        <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
          <span className="material-symbols-outlined" style={{position: 'absolute', left: '1rem', color: '#94a3b8', fontSize: '20px', userSelect: 'none'}}>call</span>
          <input
            style={{width: '100%', borderRadius: '1rem', border: 'none', backgroundColor: 'white', color: '#0f172a', height: '3.5rem', paddingLeft: '3rem', paddingRight: '1rem', fontSize: '1rem'}}
            id="phone"
            placeholder="Phone Number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            required
          />
        </div>
      </div>
      {/* Add Button */}
      <button
        style={{width: '100%', height: '3.5rem', borderRadius: '1rem', backgroundColor: '#137fec', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(19, 127, 236, 0.2)', border: 'none', color: 'white', fontSize: '1rem', fontWeight: '700'}}
        onClick={handleSubmit}
      >
        <span>Add Contact</span>
      </button>
    </>
  )
}

export default PersonForm
