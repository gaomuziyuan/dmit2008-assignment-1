// import {getRequest} from './fetch/get-requests.js';
import {SwapiModel} from './models/swapi-model.js';
import {StockDisplay} from './views/stock-display.js';
import {DisplayController} from './controllers/display-controller.js';

let btn = document.querySelector('#makeRequest');
btn.onclick= function(e){
    e.preventDefault();
    let stockSymbol = document.querySelector('#searchTerm').value;
    const model = new SwapiModel(stockSymbol);
    const stockDisplay = new StockDisplay('.stock-display');
    const displayController = new DisplayController(model, stockDisplay);
    displayController.configUI();
}