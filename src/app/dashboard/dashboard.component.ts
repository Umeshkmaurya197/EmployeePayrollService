import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employees: Array<any> = [];
  employeesCount!: number;

  constructor(private employeeService:EmployeeService,private router:Router) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe((data:any)=>{
      this.employees=data.data;
      this.employeesCount=(this.employees.length)+1;
      console.log(this.employees);
    });
  }

  getEmployeeByIdOnly(Id:number){
    this.employeeService.getEmployeeById(Id).subscribe((response:any)=>{
    this.employees=response.data;
    })
  }

  deleteEmployeeByIdOnly(Id:number){
    this.employeeService.deleteEmployeeById(Id).subscribe((response:any)=>{
      this.ngOnInit();
      this.router.navigate(['dashboard']);
    });
  }

  editById(Id:number){
    this.router.navigate(['update',Id]);
  }

}


