import { Injectable, ViewChild } from '@angular/core';
import { AlunosRepositoryService } from '../../data/repositories/alunos-repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Injectable()
export class AlunosListViewModelService {
  constructor(
    private readonly alunosRepositoryService: AlunosRepositoryService
  ) {}

  public initViewModel(): void {}

  public destroyViewModel(): void {}
}
