import { Injectable } from '@angular/core';

@Injectable()
export class HomeViewModelService {
  constructor() {}

  public initViewModel(): void {}

  public destroyViewModel(): void {}


  public redirectFeature(route: string): void {
    console.log(route);
  }
}
