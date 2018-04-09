let Quote = require("mongoose").model("Quote");

class QuoteController{

  index(req,res){

    res.render("index");

  }

  new_quote(req,res){

    let quote = new Quote(req.body);

    quote.save((err)=>{

      if(err){

        res.render("quotes",{errors:quote.errors});

      } else {

        res.redirect("/quotes");

      }
    })
  }

  quotes(req,res){

    Quote.find({},(err,arr)=>{

      res.render("quotes",{quotes:arr});

    });
  }


}

module.exports = new QuoteController();

