import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgBootstrapComponent } from './ng-bootstrap.component';

const routes: Routes = [
    {path: '', component: NgBootstrapComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);