import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { andyRoutes } from './andy.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(andyRoutes)
  ],
  declarations: [
    TestComponent
  ],
  providers: [

  ]
})

export class AndyModule {

}
