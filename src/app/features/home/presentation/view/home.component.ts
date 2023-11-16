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

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'situation',
    'symbol',
  ];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  situation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    situation: 'In Progress',
    symbol: 'H',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    situation: 'In Progress',
    symbol: 'He',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    situation: 'In Progress',
    symbol: 'Li',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    situation: 'In Progress',
    symbol: 'Be',
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    situation: 'In Progress',
    symbol: 'B',
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    situation: 'In Progress',
    symbol: 'C',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    situation: 'In Progress',
    symbol: 'N',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    situation: 'In Progress',
    symbol: 'O',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    situation: 'In Progress',
    symbol: 'F',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    situation: 'In Progress',
    symbol: 'Ne',
  },
];
