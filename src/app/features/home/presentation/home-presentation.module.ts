import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './view/home.component';
import { HomeViewModelService } from './view-model/home-view-model.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [HomeViewModelService],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
        MatPaginatorModule
    ]
})
export class HomePresentationModule {}
