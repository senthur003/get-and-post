import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FileService } from './file.service';
import { Observable,observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  login: FormGroup;
  login1: FormGroup;
  city: any;
  film: any;
  film1: any;
  title = 'file';
  

  constructor(private fb: FormBuilder,private fileservice: FileService, private http: HttpClient) {
    this.login = this.fb.group({
      "email": [''],
      "first_name": [],
      "last_name": [],
      "name":[],
      "job":[]
    });
    this.login1 = this.fb.group({
      "name":[],
      "job":[]
    });

  }

  ngOnInit(): void {
    this.city = [
      { name: 'madurai', postalcode: '21312312' },
      { name: 'trichy', postalcode: '12312' },
    ];

    const http = this.http.get('https://reqres.in/api/users?page=2')
      .pipe(
        map((response: any) => {
          return response;
        })
      );

    http.subscribe((res: any) => {
      this.film = res.data;
    });    
    
  }

  submit() {
    console.log(this.login.value);
  }
  newuser(){
    
    this.fileservice.savedata(this.login1.value).subscribe((result)=>{
      console.log(result);
    });
    
}
}
