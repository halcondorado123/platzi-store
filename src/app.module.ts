import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';
import { OrdersController } from './controllers/orders.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [], // Aquí solo van módulos, no controladores
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    CustomersController,
    OrdersController,
  ],
  providers: [AppService, ProductsService], // Aquí van los servicios
})
export class AppModule {}
