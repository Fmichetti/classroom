import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRepositoryService } from './repositories/home-repository.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [HomeRepositoryService],
})
export class HomeDataModule {}
