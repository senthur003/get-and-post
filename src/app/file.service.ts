import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {
url='https://reqres.in/api/users';
  constructor(private http:HttpClient) { }
  
  
savedata(data:any){
  console.log(data);
  return this.http.post(this.url,data);
}
}
