let QuoteController = require("../controllers/QuoteController.js");

module.exports = (app)=>{

  app.get("/",QuoteController.index);
  app.get("/quotes",QuoteController.quotes);
  app.post("/new_quote",QuoteController.new_quote);

}
