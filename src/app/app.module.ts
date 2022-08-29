import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeNestedComponent } from './employee-nested.component';
import { EmployeeConcatMapComponent } from './employee-concat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeNestedComponent,
    EmployeeConcatMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
