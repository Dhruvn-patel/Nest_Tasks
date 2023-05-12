import { Injectable, NestMiddleware, RequestMethod } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Auth0Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middleware 1 called' + req.url)
    next();
  }
}
