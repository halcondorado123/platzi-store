import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products') // Sera la ruta principal para acceder a cualquier controller /producto/...
export class ProductsController {
  // @Get('products') // Ya no sera necesario establecer products en la ruta
  @Get() // Manejo de parámetros de consulta con conversión
  getProductByQuery(
    @Query('limit') limit = 100, // Por defecto 100
    @Query('offset') offset = 0, // Por defecto 0
    @Query('brand') brand?: string, // Opcional
  ) {
    const parsedLimit = parseInt(limit.toString(), 10) || 0; // Convierte a número
    const parsedOffset = parseInt(offset.toString(), 10) || 0; // Convierte a número
    return `Products: limit => ${parsedLimit}, offset => ${parsedOffset}, brand => ${brand ?? 'not provided'}`;
  }

  // @Get('/products/filter') // Ya no sera necesario establecer products en la ruta
  @Get('filter') // Forma para definir el parametro
  getProductsFilter() {
    return `Yo soy un filter`;
  }

  @Get(':productId') // Forma para definir el parametro
  getProductsByParameters(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
