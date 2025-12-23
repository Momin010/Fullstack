/**
 * Fetch current weather from Open-Meteo
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Promise<Object|null>} CurrentWeather object
 */
export async function getCurrentWeather(latitude, longitude) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Europe/Helsinki`
    );

    if (!res.ok) {
      console.error("Failed to fetch weather:", res.statusText);
      return null;
    }

    const data = await res.json();
    return data.current_weather;
  } catch (err) {
    console.error("Error fetching weather:", err);
    return null;
  }
}