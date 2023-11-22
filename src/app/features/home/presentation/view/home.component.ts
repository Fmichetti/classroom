import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeViewModelService } from '../view-model/home-view-model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(public readonly homeViewModelService: HomeViewModelService) {}

  public ngOnInit(): void {
    this.homeViewModelService.initViewModel();
  }

  public ngOnDestroy(): void {
    this.homeViewModelService.destroyViewModel();
  }
}

