import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './presentation/view/alunos.component';

const routes: Routes = [{path: '', component: AlunosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
