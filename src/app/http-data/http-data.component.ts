import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-data',
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {
arrayData;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://5d11af7e84e9060014576440.mockapi.io/user')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.arrayData=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
