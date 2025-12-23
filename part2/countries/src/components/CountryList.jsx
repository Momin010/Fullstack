const CountryList = ({ countries, onShow }) => {
  return (
    <div className="flex flex-col gap-4">
      {countries.map(country => (
        <div key={country.cca3} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-lg">{country.name.common.slice(0, 2).toUpperCase()}</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-slate-900 dark:text-white font-bold text-base leading-snug">{country.name.common}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{country.capital?.[0] || 'No capital'}</p>
            </div>
          </div>
          <button
            onClick={() => onShow(country)}
            className="h-10 w-10 flex items-center justify-center rounded-full text-slate-400 hover:text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label={`Show details for ${country.name.common}`}
          >
            <span className="material-symbols-outlined" style={{fontSize: '24px'}}>visibility</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default CountryList