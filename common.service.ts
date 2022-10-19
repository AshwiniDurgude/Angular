import { Injectable } from '@angular/core';

import { Student } from '../student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  [x: string]: any;
  url:string="http://localhost:3000/Student";

  constructor(public http: HttpClient) { }
  s:Student={
    id:null,
    name:"",
    address:""
  }
  getData():any{
    return this.http.get(this.url);
  }
  postdata(st:Student)
  {
    return this.http.post(this.url,st)
  }
  updatedata(st:Student)
  {
    return this.http.put(this.url+"/"+st.id,st)
  }
  deletedata(st:Student)
  {
    return this.http.delete(this.url+"/"+st.id)
  }
}