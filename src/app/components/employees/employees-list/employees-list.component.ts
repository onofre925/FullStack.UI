import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Component({
  //selector: 'app-employees-list',
  selector: 'employees',
  templateUrl: './employees-list.component.html',
  //styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[] = [
    {
      id: 'c705cd8b-0297-441c-af5b-102620816a70',
      name:'Manny Gonzalez',
      email: 'mannyG@gmail.com',
      phone: 619877665,
      salary: 70000,
      department: 'Information Technology'
    },
    {
      id: 'c705cd8b-0297-441c-af5b-102620816a70',
      name:'Sammantha Hudson',
      email:'sammyH@gmail.com',
      phone: 916877665,
      salary: 70000,
      department: 'Information Technology'
    },
    {
      id: 'c705cd8b-0297-441c-af5b-102620816a70',
      name:'Chloe Gallagher',
      email: 'chloeH@gmail.com',
      phone: 925877665,
      salary: 70000,
      department: 'Information Technology'
    },
  ];

  constructor() { }
  ngOnInit(): void{


  }
}
