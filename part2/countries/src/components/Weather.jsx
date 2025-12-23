import { useState, useEffect } from 'react'
import { getCurrentWeather } from '../services/weatherService'
import { weatherCodeToText } from '../utils/weatherCodes'

const Weather = ({ capital, latlng }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (!latlng) return

    const [lat, lon] = latlng

    getCurrentWeather(lat, lon).then(setWeather)
  }, [latlng])

  if (!weather) {
    return (
      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
        <p className="text-slate-600 dark:text-slate-400 text-sm">Loading weather...</p>
      </div>
    )
  }

  return (
    <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '24px'}}>cloud</span>
        Weather in {capital}
      </h3>
      <div className="space-y-2">
        <p className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '18px'}}>thermostat</span>
          <span className="font-medium">Temperature:</span> {weather.temperature}°C
        </p>
        <p className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '18px'}}>air</span>
          <span className="font-medium">Wind:</span> {weather.windspeed} km/h
        </p>
        <p className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '18px'}}>navigation</span>
          <span className="font-medium">Direction:</span> {weather.winddirection}°
        </p>
        <p className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{fontSize: '18px'}}>wb_sunny</span>
          <span className="font-medium">Condition:</span> {weatherCodeToText(weather.weathercode)}
        </p>
      </div>
    </div>
  )
}

export default Weather