import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public menuButtons = [
    {
      id: '',
      text: 'Avaliacao',
      icon: 'description',
    },
    {
      id: 'questao',
      text: 'Questao',
      icon: 'list',
    },
    {
      id: 'alunos',
      text: 'Alunos',
      icon: 'person',
    },
    {
      id: 'correcao',
      text: 'Correcao',
      icon: 'photo_camera',
    },
    {
      id: 'settings',
      text: 'Ajustes',
      icon: 'settings',
    },
  ];
}
