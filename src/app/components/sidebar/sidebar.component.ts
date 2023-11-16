import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public menuButtons = [
    {
      text: 'Home',
      icon: 'home',
    },
    {
      text: 'Avaliacao',
      icon: 'description',
    },
    {
      text: 'Questao',
      icon: 'list',
    },
    {
      text: 'Alunos',
      icon: 'person',
    },
    {
      text: 'Correcao',
      icon: 'photo_camera',
    },
    {
      text: 'Ajustes',
      icon: 'settings',
    },
  ];
}
