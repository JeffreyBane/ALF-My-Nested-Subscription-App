import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeConcatMapComponent } from './employee-concat-map.component';
import { EmployeeNestedComponent } from './employee-nested.component';

const routes: Routes = [  
{
  path: 'Nested',
  component: EmployeeNestedComponent
},
{
  path: 'ConcatMap',
  component: EmployeeConcatMapComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
