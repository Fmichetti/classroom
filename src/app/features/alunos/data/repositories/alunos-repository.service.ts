import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlunoParams, IUserParams } from '../interfaces/aluno.interface';

@Injectable()
export class AlunosRepositoryService {
  public url = 'http://localhost:8080';
  public token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDA4NTg3NzksInVzZXJfaWQiOjF9.bmIQtTm6WCcJ37MLb4v-j-JgjZZ5gp3W2uzXM_usmCs';

  constructor(private readonly http: HttpClient) {}

  public criaUser(params: IUserParams): Observable<any> {
    return this.http.post<Observable<any>>(this.url + `/register`, {
      username: params.username,
      password: params.password,
      email: params.email,
    });
  }

  public criaAluno(params: IAlunoParams): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.post<Observable<any>>(this.url + `/api/alunos`, {
      nome: params.nome,
      matricula: params.matricula,
      data_nascimento: params.data_nascimento,
      user_id: params.user_id,
      turma_id: params.turma_id
    }, {headers: headers});
  }

  public listaTurmas(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get<Observable<any>>(this.url + `/api/turmas`, {headers: headers});
  }

  public listaTodosAlunos(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.get<Observable<any>>(this.url + `/api/alunos`, {headers: headers})
  }
}
