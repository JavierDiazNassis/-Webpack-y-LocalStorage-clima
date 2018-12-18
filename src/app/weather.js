export class weather {

    constructor(city, countryCode) {
        this.apikey = '4edeba0369fd71709ab3a760c316a8ee';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getweather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;

    }

}