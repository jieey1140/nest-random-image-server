import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageInitService } from './images/image.init';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [AppController],
  providers: [AppService, ImageInitService],
})
export class AppModule {}
