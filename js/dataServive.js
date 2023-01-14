class DataService{
    #url = 'http://api.openweathermap.org/data/2.5/weather';
    #appId = 'bf35cac91880cb98375230fb443a116f';

    async getWeatherForecast(cityId){
        const url = `${this.#url}?id=${cityId}&appid=${this.#appId}`;
        const response = await fetch(url);
        if(response.ok){
            return response.json();
        }
        else {
            throw new Error(`Status: ${response.status}, message: ${response.statusText}`);
        }
    }
}
export const dataService = new DataService();