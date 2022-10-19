import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-studentcurd',
  templateUrl: './studentcurd.component.html',
  styleUrls: ['./studentcurd.component.css']
})
export class StudentcurdComponent implements OnInit {

  constructor(public cs:CommonService) { }
  st:Student[];

  ngOnInit(): void {}

    submitData(st:Student)
    {
      if(st.id==null)
      {
        this.cs.postdata(st).subscribe();
      }
      else{
        this.cs.updatedata(st).subscribe();
      }
      window.location.reload();
    }
    //resetdata()
    //{
     //this.cs.st=Object.assign({},null)
     //window.location.reload();
    //}
  }
   
  
  


