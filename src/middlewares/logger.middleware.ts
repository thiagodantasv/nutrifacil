import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function){
        console.log('Middleware working ->');
        // console.log('Request ->', req);
        // console.log('Response ->', res);
        next();
    }
}