export interface IAlunoParams {
  nome: string;
  matricula: string;
  data_nascimento: string;
  user_id: number;
  turma_id: string;
}

export interface IUserParams {
  username: string;
  password: string;
  email: string;
}

export interface ITurmaResposnse {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  nome: string;
}

export interface IAlunoResponse {
  matricula: string;
  nome: string;
  turma: string;
}
