// import {getRequest} from './fetch/get-requests.js';
import {SwapiModel} from './models/swapi-model.js';
import {StockDisplay} from './views/stock-display.js';
import {DisplayController} from './controllers/display-controller.js';

let search = document.querySelector('#search');

search.addEventListener('submit', function(e) {
    e.preventDefault();
    let stockSymbol = document.querySelector('#searchTerm').value;
    let model = new SwapiModel(stockSymbol);
    let stockDisplay = new StockDisplay('.stock-display');
    let displayController = new DisplayController(model, stockDisplay);
    displayController.configUI();
})