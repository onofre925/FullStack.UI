import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './components/employees/add-employees/add-employees.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
'employees-FileList.component';
AddEmployeesComponent
const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent
   },
   {
    path: 'employees',
    component: EmployeesListComponent
   },
   {
    path: 'employees/add',
    component: AddEmployeesComponent
   }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
