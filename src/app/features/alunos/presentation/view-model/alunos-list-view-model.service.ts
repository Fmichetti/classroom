import { Injectable } from '@angular/core';
import { AlunosRepositoryService } from '../../data/repositories/alunos-repository.service';

@Injectable()
export class AlunosListViewModelService {
  displayedColumns: string[] = [
    'nome',
    'matricula',
    'turma',
    'acoes'
  ];

  public dataSource: Array<any> = []

  constructor(
    private readonly alunosRepositoryService: AlunosRepositoryService
  ) {}

  public initViewModel(): void {
    this.buscaTodosAlunos();
  }

  public destroyViewModel(): void {}

  public buscaTodosAlunos(): void {
    this.alunosRepositoryService.listaTodosAlunos().subscribe((data) => {
      this.dataSource = data
    });
  }
}
