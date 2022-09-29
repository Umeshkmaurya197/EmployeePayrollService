import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  insertEmployee(employee:any){
    return this.http.post("http://localhost:8080/employeepayrollservice/addEmployee",employee);
  }

  getAllEmployee(){
    return this.http.get("http://localhost:8080/employeepayrollservice/get-all");
  }
  getEmployeeById(Id:number){
    return this.http.get("http://localhost:8080/employeepayrollservice/get-by-id/"+Id);
  }
  updateEmployeeById(employee:any,Id:number){
    return this.http.put("http://localhost:8080/employeepayrollservice/update/"+Id,employee);
  }
  deleteEmployeeById(Id:number){
    return this.http.delete("http://localhost:8080/employeepayrollservice/delete/"+Id);
  }
}
