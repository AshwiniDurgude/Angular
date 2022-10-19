import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurdComponent } from './curd/curd.component';
import { StudentcurdComponent } from './studentcurd/studentcurd.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CurdComponent,
    StudentcurdComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  exports:[
    CurdComponent,StudentcurdComponent
  ]
})
export class DatabaseModule { }
