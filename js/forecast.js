export class Forecast{
    constructor(forecast){
        this.name = forecast.name;
        this.temp = forecast.main.temp;
        this.description = forecast.weather[0].description;
        this.icon = forecast.weather[0].icon;
    }
}