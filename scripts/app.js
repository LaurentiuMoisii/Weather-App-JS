const cityFrom = document.querySelector('form')

const updateCity = async(city) => {
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

cityFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const city = cityFrom.city.value.trim()
    cityFrom.reset()

    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err))
})