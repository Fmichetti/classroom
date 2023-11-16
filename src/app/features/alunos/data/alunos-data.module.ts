import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunosRepositoryService } from './repositories/alunos-repository.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [AlunosRepositoryService],
})
export class AlunosDataModule {}
