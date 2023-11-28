import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AlunosListViewModelService } from '../../view-model/alunos-list-view-model.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlunosRepositoryService } from '../../../data/repositories/alunos-repository.service';
import { IAlunoResponse } from '../../../data/interfaces/aluno.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['nome', 'matricula', 'turma', 'acoes'];
  public filters: string[] = ['Nome', 'Matricula', 'Turma'];

  public dataSource!: MatTableDataSource<IAlunoResponse>;

  public formGroup!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public readonly alunosListViewModelService: AlunosListViewModelService,
    private readonly alunosRepositoryService: AlunosRepositoryService,
    private readonly _formBuilder: FormBuilder
  ) {
    this.buscaTodosAlunos();
  }

  public ngOnInit(): void {
    this.alunosListViewModelService.initViewModel();

    this.inicializaForm();
  }

  public ngOnDestroy(): void {
    this.alunosListViewModelService.destroyViewModel();
  }

  public inicializaForm(): void {
    this.formGroup = this._formBuilder.group({
      filterValue: [''],
      filterOptionValue: [''],
    });
  }

  public filtrar(): void {
    const {filterValue, filterOptionValue} = this.formGroup.value;

    this.buscaTodosAlunos(filterOptionValue, filterValue);
  }

  public buscaTodosAlunos(chave: string = '', valor: string = ''): void {
    this.alunosRepositoryService.listaTodosAlunos(chave.toLocaleLowerCase(), valor).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
