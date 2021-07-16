const key = 'bQm4jRtTMvGnNSS7SLPOiWzqO3bPQnNW' // 50 request a day

// get weather information
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}

// get city information
const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}` // ? in an url adds query params
    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}