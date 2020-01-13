const express = require("express");
const request = require("request");
const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
  throw result.error
}

const app = express();

<<<<<<< HEAD
const url = `${process.env.PROTOCOL}}://${process.env.SERV_USERNAME}:${process.env.SERV_PASSWORD}@${process.env.BGS_DOMAIN}`;
=======
const url = `${process.env.PROTOCOL}://${process.env.SERV_USERNAME}:${process.env.SERV_PASSWORD}@${process.env.BGS_DOMAIN}`;
>>>>>>> BGSConterra

app.all(`${process.env.CLIENT_PROXY_URL}*`,(req,res)=>{
    let requestUrl = req.url;
    let remoteRequest = url + requestUrl.replace(`${process.env.CLIENT_PROXY_URL}`,"");
    console.log(remoteRequest);
    request.get(remoteRequest).pipe(res);
});

app.listen(process.env.PORT,()=>{
   console.log(`Proxy Started .. in port ${process.env.PORT}`); 
});

 