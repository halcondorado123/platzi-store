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

  // @Get() // Manejo de parámetros de consulta con conversión
  // getProductByQuery(
  //   @Query('limit') limit?: string, // Recibe como string
  //   @Query('offset') offset?: string, // Recibe como string
  //   @Query('brand') brand?: string, // Opcional
  // ) {
  //   // Convertir los valores a números, asegurando valores por defecto si hay errores
  //   const parsedLimit =
  //     limit && !isNaN(Number(limit)) ? parseInt(limit, 10) : 100;
  //   const parsedOffset =
  //     offset && !isNaN(Number(offset)) ? parseInt(offset, 10) : 0;

  //   return {
  //     success: true, // Generalmente en APIs se usa "success" en lugar de "Success"
  //     message: 'Products retrieved successfully',
  //     data: {
  //       limit: parsedLimit,
  //       offset: parsedOffset,
  //       brand: brand ?? 'not provided',
  //     },
  //   };
  // }

  // @Get('/products/filter') // Ya no sera necesario establecer products en la ruta
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
    // return {
    //   success: true,
    //   message: `Product ${productId} retrieved successfully`,
    // };
    return this.productsService.findOne(+productId); // <-- Se agrega el signo + para convertir el string a número
  }

  // @Get(':productId') // Forma para definir el parametro
  // @HttpCode(HttpStatus.ACCEPTED) // Cambiar el código de estado de la respuesta
  // getByIdParameters(@Param('productId') productId: string) {
  //   return {
  //     success: true,
  //     message: `Product ${productId} retrieved successfully`,
  //   };
  // }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   success: true,
    //   message: 'Accion de crear, ejecutada exitosamente',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  // @Post()
  // create(@Body() payload: string) {
  //   return {
  //     success: true,
  //     message: 'Accion de crear, ejecutada exitosamente',
  //     payload,
  //   };
  // }

  // Patch según RESTful es para actualizar parcialmente un recurso
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: string) {
    return this.productsService.update(+id, payload);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() payload: string) {
  //   return {
  //     success: true,
  //     message: '¡Acción de actualizar, ejecutada exitosamente!',
  //     payload,
  //   };
  // }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      success: true,
      message: `¡Acción de eliminar, ejecutada para el id ${id}!`,
    };
  }

  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return {
  //     success: true,
  //     message: `¡Acción de eliminar, ejecutada para el id ${id}!`,
  //   };
  // }
}
