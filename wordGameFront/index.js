const app = require('express')();


app.use('/',(req,res,next)=>{
    console.log('Request URL:',req.originalUrl);
    next();
});

app.listen(3001);

