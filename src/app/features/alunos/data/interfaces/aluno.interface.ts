export interface IAlunoParams {
  nome: string;
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
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  nome: string;
}
