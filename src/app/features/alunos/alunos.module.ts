import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosPresentationModule } from './presentation/alunos-presentation.module';
import { AlunosDataModule } from './data/alunos-data.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    AlunosPresentationModule,
    AlunosDataModule,
  ],
  providers: [],
})
export class AlunosModule {}
