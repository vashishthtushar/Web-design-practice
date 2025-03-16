const express = require("express");
const app = express();

// app.use((req, res, next) =>{
//     console.log("Hello I am 1st middleware");
//     next();
// }); 


// app.use((req, res, next) =>{
//     console.log("Hello I am 2nd middleware");
//     next();
// }); 

// // Logger - morgan
// app.use((req, res, next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// }); 


// // 404
// app.use((req, res)=>{
//     res.send("Page not found");
// })

const checkToken =  (req, res, next) =>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error('Access Denied!')
};

// app.get("/wrong", (req, res)=>{
//     abcd = abcd;
// });


// Activity
app.get("/api",checkToken, (req, res)=>{
    res.send("data");
})




app.get("/", (req, res)=>{
    res.send("Hi i am root");
});

app.get("/random", (req, res)=>{
    res.send("this is a random page");
});

app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
});
