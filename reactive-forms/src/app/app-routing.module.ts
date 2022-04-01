import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormgroupComponent } from './reactive-forms/formgroup/formgroup.component';
import { FormbuilderComponent } from './reactive-forms/formbuilder/formbuilder.component';



const routes: Routes = [
  {
    path: 'reactive-form/formGroup', 
    component: FormgroupComponent
  },
  {
    path: 'reactive-form/formBuilder', 
    component: FormbuilderComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
