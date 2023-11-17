import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunosNewViewModelService } from '../../view-model/alunos-new-view-model.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, OnDestroy{
  constructor(
    public readonly alunosNewViewModelService: AlunosNewViewModelService
  ) {}

  public ngOnInit(): void {
    this.alunosNewViewModelService.initViewModel();
  }

  public ngOnDestroy(): void {
    this.alunosNewViewModelService.destroyViewModel();
  }
}
