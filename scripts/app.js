const cityFrom = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const forecast = new Forecast()

console.log(forecast)


const updateUi = (data) => {
    // const cityDetails = data.cityDetails
    // const weather = data.weather
    const { cityDetails, weather} = data
    //update details template

    details.innerHTML = 
    `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
    `
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
    time.setAttribute('src', timeSrc)
    console.log(timeSrc)
}


const updateCity = async(city) => {

}

cityFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = cityFrom.city.value.trim()
    cityFrom.reset()

    forecast.updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err))
    // set local storage
    localStorage.setItem('city', city)
})