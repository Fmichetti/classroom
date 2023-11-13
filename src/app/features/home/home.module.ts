import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePresentationModule } from './presentation/home-presentation.module';
import { HomeDataModule } from './data/home.data.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomePresentationModule,
    HomeDataModule,
  ],
  providers: [],
})
export class HomeModule {}
