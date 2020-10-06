import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function){
        console.log('Middleware working ->');
        //some examples of what can be seen using this req:Request from express paramater;
        console.log('Request Method ->', req.method);
        console.log('Request Params ->', req.params);
        console.log('Request Url ->', req.url);
        //And there is a lot more that can be seen using this res:Response from express paramater, both properties and methods;
        // console.log('Response ->', res.json);
        
        // the next() is mandatory. If you configured more than one middleware, it will pass to the next one, if you dont, it will just finish the middleware process.
        next();
    }
}