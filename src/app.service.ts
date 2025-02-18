import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Este es el primer Hello World de Nest.JS!';
  }
}
