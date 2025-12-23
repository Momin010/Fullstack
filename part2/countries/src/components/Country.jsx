import Weather from './Weather'

const Country = ({ country }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
          className="w-16 h-12 rounded object-cover"
        />
        <h1 className="text-slate-900 dark:text-white text-2xl font-bold">{country.name.common}</h1>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '20px'}}>location_city</span>
          <p className="text-slate-700 dark:text-slate-300"><span className="font-medium">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '20px'}}>terrain</span>
          <p className="text-slate-700 dark:text-slate-300"><span className="font-medium">Area:</span> {country.area.toLocaleString()} km²</p>
        </div>

        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 mt-1" style={{fontSize: '20px'}}>language</span>
          <div>
            <h3 className="text-slate-900 dark:text-white font-medium mb-2">Languages:</h3>
            <ul className="space-y-1">
              {Object.values(country.languages || {}).map(lang => (
                <li key={lang} className="text-slate-600 dark:text-slate-400 text-sm">• {lang}</li>
              ))}
            </ul>
          </div>
        </div>

        <Weather capital={country.capital?.[0]} latlng={country.latlng} />
      </div>
    </div>
  )
}

export default Country