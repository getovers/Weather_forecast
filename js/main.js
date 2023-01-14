import { ContentSwitcher } from './contentSwitcher.js';
import { STATE } from './state.js';
import { Forecast } from './forecast.js';
import { dataService } from './dataServive.js';

const contentSwitcher = new ContentSwitcher();

window.addEventListener('load', async() =>{
    contentSwitcher.showContent();
    STATE.citiesList.forEach( async cityId => {
        const responseObj = await dataService.getWeatherForecast(cityId);
        const currentForecast = new Forecast(responseObj);
        
    });
    contentSwitcher.disablePreloader();
} )