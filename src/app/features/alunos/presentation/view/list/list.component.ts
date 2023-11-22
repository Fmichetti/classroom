import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunosListViewModelService } from '../../view-model/alunos-list-view-model.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(public readonly alunosListViewModelService: AlunosListViewModelService) {}

  public ngOnInit(): void {
    this.alunosListViewModelService.initViewModel();
  }

  public ngOnDestroy(): void {
    this.alunosListViewModelService.destroyViewModel();
  }
}
