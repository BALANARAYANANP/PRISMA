// src/middlewares/validate.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema , ZodError} from 'zod';
import { method } from '../dto/profileInterface';

export const Validate =
  (schema: ZodSchema , type : method) =>
  (req: Request, res: Response, next: NextFunction):void => {
    try {
      const result = schema.parse(req[type]);
      if(result.success)
        req.body = result.data
      next();
    } catch (err: any) {
        if(err instanceof ZodError){
       res.status(400).json({
        message: err.errors.map(err => err.message)
      
      });}
    }
  };