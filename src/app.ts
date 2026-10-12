import express, { type Application, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import router from './app/routes/index.ts';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './app/lib/auth.ts';

dotenv.config();
export const app : Application = express();

app.use("/api/auth/*", toNodeHandler(auth));
app.use(express.json())


app.get('/',(req : Request, res : Response)=>{
    res.send("Server is working properly ")
})

app.use('/api/v1', router);
