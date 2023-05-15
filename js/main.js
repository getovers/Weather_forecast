import { ContentSwitcher } from './contentSwitcher.js';
import { STATE } from './state.js';
import { Forecast } from './forecast.js';
import { dataService } from './dataServive.js';
import { ForecastListView } from './forecastListView.js';

const contentSwitcher = new ContentSwitcher();
let unit = 'metric';
window.addEventListener('load', async () => {
    const forecastListView = new ForecastListView('#tableBody');

    STATE.citiesList.forEach( async cityId => {
        const responseObj = await dataService.getWeatherForecast(cityId, unit);
        const currentForecast = new Forecast(responseObj);
        forecastListView.showForecast(currentForecast);
    });
    contentSwitcher.showContent();
    contentSwitcher.disablePreloader();
} )


