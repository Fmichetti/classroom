import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './presentation/view/alunos.component';
import { ListComponent } from './presentation/view/list/list.component';
import { NewComponent } from './presentation/view/new/new.component';
import { EditComponent } from './presentation/view/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: 'new',
        pathMatch: 'full',
        component: NewComponent,
      },
      {
        path: 'edit',
        pathMatch: 'full',
        component: EditComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
