import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Controller por default de Nest.Js
  @Get()
  getHello(): string {
    // return this.appService.getHello()
    return 'Imprimiendo el string directo del controller';
  }

  @Get('nuevo') // Si me voy a localhost3000/nuevo, me ejecutara este metodo
  newEnpoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta') // Establecer una ruta
  hello() {
    return 'con /sas/';
  }
}
