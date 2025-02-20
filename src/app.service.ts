import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Este es el primer Hello World de Nest.JS! Por favor cargar cualquier cambio en el archivo app.service.ts, de hay recargue la pagina';
  }
}
