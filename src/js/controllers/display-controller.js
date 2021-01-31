function DisplayController(model, stockDisplay) {
    this.model = model;
    this.stockDisplay = stockDisplay;
    this.configUI = async function(){
        const data = await this.model.init();
        this.stockDisplay.configUI(data['Global Quote']);
    }
    return this;
}

export {DisplayController};