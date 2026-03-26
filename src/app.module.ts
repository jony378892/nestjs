import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.POST },
        {
          path: 'cats',
          method: RequestMethod.PUT,
        },
        'cats/{*splat}',
      )
      .forRoutes(CatsController);
  }

  /* Function middleware apply method
  
  consumer
  .apply(logger)
  .forRoutes(CatsController);
  */

  /* Function middleware apply with multiple middleware method
  
  consumer
  .apply(cors(), helmet(), logger)
  .forRoutes(CatsController);
  */
}
