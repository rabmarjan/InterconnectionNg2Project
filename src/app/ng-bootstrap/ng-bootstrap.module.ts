import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapComponent } from './ng-bootstrap.component';
import { NgBootstrapService } from './ng-bootstrap.service';
import { routing } from './ng-bootstrap.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    routing
  ],
  declarations: [NgBootstrapComponent],
  exports: [NgBootstrapComponent]
})
export class NgBootstrapModule { 
  static forRoot(): ModuleWithProviders{
   return {
      ngModule: NgBootstrapModule,
      providers: [NgBootstrapService]
   }
  }
}
