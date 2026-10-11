import express, { type Application, type Request, type Response } from 'express';

const app : Application = express();

app.get('/',(req : Request, res : Response)=>{
    res.send("Server is working properly ")
})

app.listen(5000,()=>{
    console.log('server running ')
})