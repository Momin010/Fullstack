import personService from "../services/persons"

const Persons = ({ persons, filter, setPersons, showNotification }) => {
  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete ${name}?`)) return

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
        showNotification(`Deleted ${name}`)
      })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {persons
        .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .map((person, index) => {
          const colors = ['#3b82f6', '#6366f1', '#10b981'];
          const bgColor = colors[index % colors.length];
          return (
            <div
              key={person.id}
              style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9'}}
            >
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{color: '#0f172a', fontWeight: '700', fontSize: '1rem', lineHeight: '1.375'}}>{person.name}</h3>
                <p style={{color: '#64748b', fontSize: '0.875rem', fontWeight: '500'}}>{person.number}</p>
              </div>
              <button
                style={{height: '2.5rem', width: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#94a3b8', border: 'none', backgroundColor: 'transparent', transition: 'color 0.2s, background-color 0.2s'}}
                onClick={() => handleDelete(person.id, person.name)}
                onMouseOver={(e) => { e.target.style.color = '#ef4444'; e.target.style.backgroundColor = '#fef2f2'; }}
                onMouseOut={(e) => { e.target.style.color = '#94a3b8'; e.target.style.backgroundColor = 'transparent'; }}
              >
                <span className="material-symbols-outlined" style={{fontSize: '24px'}}>delete</span>
              </button>
            </div>
          );
        })}
    </div>
  )
}

export default Persons
