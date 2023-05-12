import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsercontrollerController } from './usercontroller/usercontroller.controller';

import { UserModule } from './user/user.module';
import { BlogsService } from './blogs/blogs.service';
import { Auth0Middleware } from './middleware/auth0/auth0.middleware';
import { Auth1Middleware } from './middleware/auth1/auth1.middleware';

@Module({
  imports: [UserModule],
  controllers: [AppController, UsercontrollerController],
  providers: [AppService, BlogsService],
})
// export class AppModule { }

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /** middleware set  */
    consumer.apply(Auth0Middleware, Auth1Middleware)
    // .forRoutes('/user') // sepcific route for
    // .forRoutes(UsercontrollerController) // sepcific Controller for
  }
}

