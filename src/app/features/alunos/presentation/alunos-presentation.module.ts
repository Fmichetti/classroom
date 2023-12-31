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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';


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
    RouterModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatSortModule,
    MatMenuModule,
    SharedModule
  ],
  exports: [AlunosComponent],
  declarations: [AlunosComponent, ListComponent, NewComponent, EditComponent],
  providers: [AlunosListViewModelService, AlunosNewViewModelService],
})
export class AlunosPresentationModule {}
