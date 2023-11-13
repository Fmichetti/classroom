import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './view/home.component';
import { HomeViewModelService } from './view-model/home-view-model.service';

@NgModule({
  imports: [CommonModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [HomeViewModelService],
})
export class HomePresentationModule {}
