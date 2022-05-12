import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { ImageEntity } from './images/image.init';
import { readFileSync } from 'fs';
import * as _ from 'lodash';
import { Response } from 'express';
@Injectable()
export class AppService {
  constructor(
    private readonly imagesInMemoryService: InMemoryDBService<ImageEntity>,
  ) {}
  public async getRandomImagesOneResponse(res: Response) {
    const getImageAll = this.imagesInMemoryService.getAll().map((item) => {
      return item.item;
    });
    const data = readFileSync('public/images/' + _.sample(getImageAll));
    return res.set({ 'Content-Type': 'image/jpeg' }).send(data);
  }
}
