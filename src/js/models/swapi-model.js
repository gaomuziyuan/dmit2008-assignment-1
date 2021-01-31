function SwapiModel(stockSymbol){
    // this.apiBaseUrl = 'https://www.alphavantage.co/';
    this.init = function(){
        const result = this.query(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=RRXI914I3CC6JXMK`).then(data=>data);
        return result;
    }
    this.query = async function(url) {
        let req = await fetch(url);
        let res = await req.json();
        return res;
    }
    return this;
}

export {SwapiModel};