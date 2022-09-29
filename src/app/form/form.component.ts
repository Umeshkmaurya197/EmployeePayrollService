import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../EmployeeModel';
import { EmployeeService } from '../employee.service';

interface Salary {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export  class FormComponent implements OnInit {
  employee:EmployeeModel =new EmployeeModel("","","",[],0,new Date,"");

  departments!: { id: number; name: string; isSelected: boolean; }[];

  Id:any = this.route.snapshot.paramMap.get("Id");
  tempArr:Array<any>=[];
  constructor (private employeeService: EmployeeService, private router:Router,private route:ActivatedRoute) { }

  salarys: Salary[] = [
    {value: 10000, viewValue: 10000},
    {value: 20000, viewValue: 20000},
    {value: 30000, viewValue: 30000},
    {value: 40000, viewValue: 40000},
    {value: 50000, viewValue: 50000},
    {value: 60000, viewValue: 60000},
    {value: 70000, viewValue: 70000},
    {value: 80000, viewValue: 80000},
    {value: 90000, viewValue: 90000},
    {value: 100000, viewValue: 100000},
  ];

  getDepartments(){
    this.departments=
    [
      {id:1,name:"IT",isSelected:false},
      {id:2,name:"Accounts",isSelected:false},
      {id:3,name:"Sales",isSelected:false},
      {id:4,name:"HR",isSelected:false},
      {id:5,name:"Others",isSelected:false}
    ]

  }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployeeById();
  }

  onChange(depart:any){
    if(!this.tempArr.includes(depart)){
      this.tempArr.push(depart);
    }
  }

   // salary Selector
  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }
  //   return value;
  //

  onCancelClick(){
    this.router.navigateByUrl('dashboard');
  }

  onSubmit(){
    this.employee.department=this.tempArr;
    console.log("submit clicked ! ");
    this.employeeService.insertEmployee(this.employee).subscribe((Response)=>{
      this.router.navigateByUrl('dashboard');
                                            //  this.router.navigate(['dashboard']);
      console.log(Response);
    })
    console.log(this.employee);
  }

  updateEmployeeByIdOnly(){
    this.employee.department=this.tempArr;
    this.employeeService.updateEmployeeById(this.employee,this.Id).subscribe((response:any)=>{
      this.router.navigate(["dashboard"]);
    })
  }

  getEmployeeById(){
    this.employeeService.getEmployeeById(this.Id).subscribe((response:any)=>{
      this.employee=response.data;
      if(this.employee.department.indexOf(this.Id)){

      }
    });
    console.log(this.employee);
  }
}

