import { Injectable } from '@angular/core';

@Injectable()
export class HomeViewModelService {
  public features = [
    {
      id: 'avaliacao',
      title: 'Avaliacao',
      icon: 'description',
    },
    {
      id: 'questao',
      title: 'Questoes',
      icon: 'quiz',
    },
    {
      id: 'aluno',
      title: 'Alunos',
      icon: 'person',
    },
    {
      id: 'corretor',
      title: 'Corretor',
      icon: 'photo_camera',
    },
  ];

  constructor() {}

  public initViewModel(): void {}

  public destroyViewModel(): void {}


  public redirectFeature(route: string): void {
    console.log(route);
  }
}
