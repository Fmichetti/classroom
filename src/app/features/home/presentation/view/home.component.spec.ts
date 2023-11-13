import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeViewModelService } from '../view-model/home-view-model.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeViewModelService: HomeViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HomeViewModelService],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeViewModelService = TestBed.inject(HomeViewModelService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the view model on ngOnInit', () => {
    spyOn(homeViewModelService, 'initViewModel');
    component.ngOnInit();
    expect(homeViewModelService.initViewModel).toHaveBeenCalled();
  });

  it('should destroy the view model on ngOnDestroy', () => {
    spyOn(homeViewModelService, 'destroyViewModel');
    component.ngOnDestroy();
    expect(homeViewModelService.destroyViewModel).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
