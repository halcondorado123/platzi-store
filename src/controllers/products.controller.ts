import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
@Controller('products') // Ruta principal para acceder a cualquier controlador de productos
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get() // Manejo de parámetros de consulta con conversión
  getProductByQuery(
    @Query('limit') limit?: string, // Recibe como string
    @Query('offset') offset?: string, // Recibe como string
    @Query('brand') brand?: string, // Opcional
  ) {
    return this.productsService.findAll();
  }

  @Get('filter') // Forma para definir el parametro
  getProductsFilter() {
    return {
      success: true,
      message: 'Yo soy un filter',
    };
  }

  @Get(':productId') // Forma para definir el parametro
  @HttpCode(HttpStatus.ACCEPTED) // Cambiar el código de estado de la respuesta
  getByIdParameters(@Param('productId') productId: string) {
    return this.productsService.findOne(+productId); // <-- Se agrega el signo + para convertir el string a número
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
