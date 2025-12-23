const Search = ({ value, onChange }) => (
  <div className="relative flex items-center w-full">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '24px'}}>search</span>
    </div>
    <input
      className="form-input block w-full rounded-2xl border-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 pl-12 pr-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-0 focus:bg-white dark:focus:bg-slate-700 shadow-sm transition-colors"
      placeholder="Search countries..."
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Search