import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunosRepositoryService } from '../../data/repositories/alunos-repository.service';
import { ITurmaResposnse } from '../../data/interfaces/aluno.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class AlunosNewViewModelService {
  public alunoForm!: FormGroup;
  public turmas: Array<ITurmaResposnse> = [];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _alunosRepositoryService: AlunosRepositoryService,
    private readonly _snackBar: MatSnackBar,
    private readonly _route: Router
  ) {}

  public initViewModel(): void {
    this.inicializaForm();
    this.loadTurmas();
  }

  public destroyViewModel(): void {}

  public inicializaForm(): void {
    this.alunoForm = this._formBuilder.group({
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      turma: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  public loadTurmas(): void {
    this._alunosRepositoryService.listaTurmas().subscribe((data) => {
      this.turmas = data;
    });
  }

  public criarNovoAluno(): void {
    const aluno = this.alunoForm.value;

    if (this.alunoForm.valid) {
      this._alunosRepositoryService
        .criaUser({
          username: aluno.username,
          password: '123456',
          email: aluno.email,
        })
        .subscribe({
          next: (data) => {
            this._alunosRepositoryService
              .criaAluno({
                nome: aluno.nome,
                data_nascimento: aluno.nascimento,
                user_id: data.id,
                turma_id: aluno.turma,
              })
              .subscribe({
                next: () => {
                  this._route.navigate(['/alunos']);
                },
                error: () => {
                  this._snackBar.open('Erro ao criar um aluno!', 'fechar');
                },
              });
          },
          error: () => {
            this._snackBar.open('Erro ao criar um usuario', 'fechar');
          },
        });
    }
  }
}
