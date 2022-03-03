const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}&units=metric`; //units=metric dile convert hoe

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
// const setInnerText = (code, text) => {
//     document.getElementById(id).innerText = text;
// }

const displayTemperature = temperature => {
    console.log(temperature.sys.country);
    setInnerText('country', temperature.sys.country);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);//array first objrct
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}