import type {  NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync.ts";
import { sendResponse } from "../../shared/sendResponse.ts";
import status from "http-status";



const register = catchAsync( async(req: Request, res: Response)=>{

    
    sendResponse(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "Registration Done Successfully",

    })
})

const login = catchAsync( async(req: Request, res: Response)=>{
    sendResponse(res,{
        httpStatusCode : status.CREATED,
        success : true,
        message : "Login Successful !!!",
    })
})
        
    


export const AuthController = {
        register,
        login,
        
}