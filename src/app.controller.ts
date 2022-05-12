import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('image/')
  getHello(@Res() response: Response) {
    return this.appService.getRandomImagesOneResponse(response);
  }
}
