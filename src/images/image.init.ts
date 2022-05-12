import {
  InMemoryDBEntity,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { readdirSync } from 'fs';

export interface ImageEntity extends InMemoryDBEntity {
  item: string;
}

@Injectable()
export class ImageInitService implements OnModuleInit {
  constructor(
    private readonly imagesInMemoryService: InMemoryDBService<ImageEntity>,
  ) {} //
  private readonly logger = new Logger(ImageInitService.name);

  async imagesInMemoryInit() {
    const imagesData = readdirSync('public/images').map((file) => {
      return {
        item: file,
      };
    });

    this.imagesInMemoryService.createManyAsync(imagesData);

    this.logger.log(
      `now InMemory added to ${imagesData.length} rows image Database.`,
    );
  }

  onModuleInit() {
    this.logger.log(`now InMemory ${ImageInitService.name} Initialization...`);
    this.imagesInMemoryInit();
  }
}
