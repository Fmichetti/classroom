import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async (): Promise<Type<unknown>> =>
      import('./features/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'alunos',
    loadChildren: async (): Promise<Type<unknown>> =>
      import('./features/alunos/alunos.module').then((mod) => mod.AlunosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
