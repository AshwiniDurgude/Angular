import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

  constructor(public service:CommonService) { }
  st:Student[];
  ngOnInit(): void {
    this.service.getData().subscribe((data:Student[])=>{
      this.st=data;
    })
  }
  editdata(stu:Student)
  {
    this.service.s=Object.assign({},stu)
    
  }
  deletedata(stu:Student)
  {
    this.service.deletedata(stu).subscribe(); 
    window.location.reload();
  }
  
}
