import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunosListViewModelService } from '../../view-model/alunos-list-view-model.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, OnDestroy{
  constructor(
    public readonly alunosListViewModelService: AlunosListViewModelService
  ) {}

  public ngOnInit(): void {
    this.alunosListViewModelService.initViewModel();
  }

  public ngOnDestroy(): void {
    this.alunosListViewModelService.destroyViewModel();
  }
}
