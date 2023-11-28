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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['nome', 'matricula', 'turma', 'acoes'];

  public dataSource!: MatTableDataSource<IAlunoResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public readonly alunosListViewModelService: AlunosListViewModelService,
    private readonly alunosRepositoryService: AlunosRepositoryService
  ) {
    this.buscaTodosAlunos();
  }

  public ngOnInit(): void {
    this.alunosListViewModelService.initViewModel();
  }

  public ngOnDestroy(): void {
    this.alunosListViewModelService.destroyViewModel();
  }

  public buscaTodosAlunos(): void {
    this.alunosRepositoryService.listaTodosAlunos().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
