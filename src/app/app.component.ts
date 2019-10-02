import { Component, OnInit } from '@angular/core';
import {RestoInfoService} from './resto-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestoInfoService]
})
export class AppComponent implements OnInit {
  title = 'test';

  info:any[] =[];

  constructor(private service: RestoInfoService){}

ngOnInit(){

  this.info = [];
  this.service.getinfo().subscribe(info => this.info = info ,
    error => console.error(error)
    );
    console.log(this.info);
    console.log(this);
    let a = this;
    console.log(a.info[0]);
    }
}
