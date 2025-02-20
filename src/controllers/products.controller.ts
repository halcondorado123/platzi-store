import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products') // Ruta principal para acceder a cualquier controlador de productos
export class ProductsController {
  @Get() // Manejo de parámetros de consulta con conversión
  getProductByQuery(
    @Query('limit') limit?: string, // Recibe como string
    @Query('offset') offset?: string, // Recibe como string
    @Query('brand') brand?: string, // Opcional
  ) {
    // Convertir los valores a números, asegurando valores por defecto si hay errores
    const parsedLimit =
      limit && !isNaN(Number(limit)) ? parseInt(limit, 10) : 100;
    const parsedOffset =
      offset && !isNaN(Number(offset)) ? parseInt(offset, 10) : 0;

    return {
      success: true, // Generalmente en APIs se usa "success" en lugar de "Success"
      message: 'Products retrieved successfully',
      data: {
        limit: parsedLimit,
        offset: parsedOffset,
        brand: brand ?? 'not provided',
      },
    };
  }

  // @Get('/products/filter') // Ya no sera necesario establecer products en la ruta
  @Get('filter') // Forma para definir el parametro
  getProductsFilter() {
    return {
      success: true,
      message: 'Yo soy un filter',
    };
  }

  @Get(':productId') // Forma para definir el parametro
  getByIdParameters(@Param('productId') productId: string) {
    return {
      success: true,
      message: `Product ${productId} retrieved successfully`,
    };
  }

  @Post()
  create(@Body() payload: string) {
    return {
      success: true,
      message: 'Accion de crear, ejecutada exitosamente',
      payload,
    };
  }
}
