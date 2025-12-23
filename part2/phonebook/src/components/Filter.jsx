const Filter = ({ filter, setFilter }) => (
  <div style={{position: 'relative', display: 'flex', alignItems: 'center', width: '100%'}}>
    <div style={{position: 'absolute', inset: '0 0 0 0', left: '0', paddingLeft: '1rem', display: 'flex', alignItems: 'center', pointerEvents: 'none'}}>
      <span className="material-symbols-outlined" style={{fontSize: '24px', color: '#94a3b8'}}>search</span>
    </div>
    <input
      style={{width: '100%', borderRadius: '1rem', border: 'none', backgroundColor: 'white', color: '#0f172a', height: '3rem', paddingLeft: '3rem', paddingRight: '1rem', fontSize: '1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', transition: 'background-color 0.2s'}}
      placeholder="Search contacts..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  </div>
)

export default Filter
