import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './view/alunos.component';
import { AlunosViewModelService } from './view-model/alunos-view-model.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [AlunosComponent],
  declarations: [AlunosComponent],
  providers: [AlunosViewModelService],
})
export class AlunosPresentationModule {}
