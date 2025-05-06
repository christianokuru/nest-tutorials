import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/auth'),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
