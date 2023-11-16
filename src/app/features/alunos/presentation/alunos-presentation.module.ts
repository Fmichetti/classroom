import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './view/alunos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListComponent } from './view/list/list.component';
import { NewComponent } from './view/new/new.component';
import { EditComponent } from './view/edit/edit.component';
import { RouterModule } from '@angular/router';
import { AlunosListViewModelService } from './view-model/alunos-list-view-model.service';
import { AlunosNewViewModelService } from './view-model/alunos-new-view-model.service';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [AlunosComponent],
  declarations: [AlunosComponent, ListComponent, NewComponent, EditComponent],
  providers: [AlunosListViewModelService, AlunosNewViewModelService],
})
export class AlunosPresentationModule {}
