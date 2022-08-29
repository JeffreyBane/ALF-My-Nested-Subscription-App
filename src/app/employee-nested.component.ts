import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
})
export class EmployeeNestedComponent implements OnInit {

  departments: any[];
  name = '';
  status = '';
  deptId = 0;
  departmentsSelect: FormControl;
  employeeForm: FormGroup;
  sub1: Subscription;
  sub2: Subscription;



  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {


    this.departmentsSelect = new FormControl();

    this.employeeForm = new FormGroup({
      departmentsSelect: this.departmentsSelect
    }
    );


      this.sub1 = this._employeeService.getDepartmentList()
         .subscribe((deptData) => {
         this.departments = deptData;
         this.sub2 = this._employeeService.getEmployeeDetails(123) 
            .subscribe(data => {

            // Set selected dropdown value:
            this.employeeForm.controls.departmentsSelect.setValue(data.deptId); 
            this.status = data.status;
            this.name = data.name;

      });
    });

  }

}
