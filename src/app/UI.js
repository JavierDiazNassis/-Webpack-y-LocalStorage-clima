export class UI {

    constructor() {
        this.location = document.getElementById(' Weather-location');
        this.desc = document.getElementById(' Weather-description');
        this.string = document.getElementById('Weather-string');
        this.humidity = document.getElementById(' Weather-humidity');
        this.wind = document.getElementById(' Weather-wind');

    }
    render(weather) {
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.humidity.textContent = 'Humidity:' + weather.main.humidity + '%';
        this.wind.textContent = 'wind:' + weather.wind.speed + 'm/s'
    }
}