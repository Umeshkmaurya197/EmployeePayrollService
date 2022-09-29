export  class EmployeeModel{

  name: string;
  image: string;
  gender: string;
  department:Array<string>;
  salary:number;
  startDate:Date;
  notes:string;

constructor(name: string,image: string,gender: string,department:Array<string>,salary:number,startDate: Date,notes:string){
    this.name = name;
    this.image=image;
    this.gender=gender;
    this.department=department;
    this.salary=salary;
    this.startDate=startDate;
    this.notes=notes;
   }


}
