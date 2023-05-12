import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Auth1Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middleware 2 called' + req.url)
    next();
  }
}
