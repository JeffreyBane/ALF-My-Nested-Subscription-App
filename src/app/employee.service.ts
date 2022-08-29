import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeDetails(empId: number): Observable<any> {
   const mockJson = {name: 'John Doe', status: 'Active', deptId: 2 };
   return of(mockJson);
  }

  getDepartmentList(): Observable<any[]> {
    const mockJson = [
    {deptId: 1, departmentName: 'Human Resources'},
    {deptId: 2, departmentName: 'Development'},
    {deptId: 3, departmentName: 'Sales'}
    ];
    return of(mockJson);

  }
}