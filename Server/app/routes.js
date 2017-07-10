// app/routes.js
var Bitcoin = require('./models/Bitcoins');


 module.exports = function(app) {

// Bitcoins operations
     app.get('/api/bitcoins', function(req, res) {

        console.log(req.query);

            Bitcoin.find(req.query,function(err, Bitcoins) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json(Bitcoins); // return all nerds in JSON format
            });

            });


      app.post('/api/bitcoins', function(req, res) {
        console.log(req.body.data)
        var newOne = new Bitcoin(req.body.data);
        newOne.save(function(err){
                if(err)
                {    console.log(err);
                    res.send(false);  
                }
        })
        res.send(true);

        });

  app.put('/api/Bitcoins',function(req,res)
    {
        console.log(req.body)
        var query = req.body.target;
        var updatepart = req.body.updatepart;
        Bitcoin.findOneAndUpdate(query,updatepart,function(err,data)
            {
               if(err)
                            res.send(err);
                        res.send("update success");
            }
            );
    });

  app.delete('/api/Bitcoins',function(req,res){
      console.log(req.body)
        var query = req.body.target;
        Bitcoin.findOneAndRemove(query,function(err,data)
            {
               if(err)
                            res.send(err);
                        res.send("delete success");
            }
            );
  });

//end of Bitcoin operations



// end of workflows


        app.get('*', function(req, res) {
            res.render('index'); // load our public/index.html file
        });




    };

  