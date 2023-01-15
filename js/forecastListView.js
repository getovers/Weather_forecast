import { Forecast } from "./forecast.js";
import { getElem } from "./helper.js";

export class ForecastListView{
    #forecastTable;
    constructor(tableId){
        this.#forecastTable = getElem(tableId);
    }
        showForecast(obj){
            if(obj instanceof Forecast){
                this.#forecastTable.append(obj.createElement());
            }
            else return;
        }
    }
