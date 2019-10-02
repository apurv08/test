import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { infofile } from './infofile';


@Injectable({
  providedIn: 'root'
})
export class RestoInfoService {

  constructor(private httpService:HttpClient) { }
  getinfo(): Observable<infofile<any>[]> {


    const info : infofile<any> [] =[];


    const exampleObservable = new Observable<infofile<any>[]>((observer) => {

      const url = "../assets/sample.json";
      this.httpService.get(url).subscribe((data) => {

        for(const x of data['fields']){
          resto_name: x.resto_name;
          resto_address : x.resto_address;
          resto_operator_name: x.resto_operator_name;

          info.push(x);
        }
        console.log(data);
      });
      info.push();
      observer.next(info);
    });
    console.log(info);
    return exampleObservable;
  }
}
