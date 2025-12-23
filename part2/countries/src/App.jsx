import { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import CountryList from './components/CountryList'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const countriesToShow = selectedCountry
    ? [selectedCountry]
    : filteredCountries

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="px-6 pt-12 pb-6">
        <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl font-extrabold leading-tight">
          Countries
        </h1>
      </header>

      {/* Search Section */}
      <section className="px-6 pb-6">
        <Search value={filter} onChange={handleFilterChange} />
      </section>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-12">
        {countriesToShow.length > 10 && (
          <p className="text-slate-500 dark:text-slate-400 text-center py-4">Too many matches, specify another filter</p>
        )}

        {countriesToShow.length > 1 && countriesToShow.length <= 10 && (
          <CountryList
            countries={countriesToShow}
            onShow={setSelectedCountry}
          />
        )}

        {countriesToShow.length === 1 && (
          <Country country={countriesToShow[0]} />
        )}
      </main>
    </div>
  )
}

export default App
