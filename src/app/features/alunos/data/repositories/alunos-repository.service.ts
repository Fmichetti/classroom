import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlunoParams, IAlunoResponse, IUserParams } from '../interfaces/aluno.interface';

@Injectable()
export class AlunosRepositoryService {
  public url = 'http://localhost:8080';
  public token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDEyMTAyODMsInVzZXJfaWQiOjF9.POl8spPDVyNpw-n5BSXCHpkhHMOsjmAD-PzbK9eEIvM';

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

  public listaTodosAlunos(chave: string, valor: string): Observable<IAlunoResponse[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    let params = new HttpParams();

    if(chave != ''){
     params = new HttpParams()
     .set(chave, valor);
    }

    return this.http.get<IAlunoResponse[]>(this.url + `/api/alunos`, {headers: headers, params: params})
  }
}
