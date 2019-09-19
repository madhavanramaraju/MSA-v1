import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

 Login(userName, Password) {
    // const obj = {
    //   ProductName,
    //   ProductDescription,
    //   ProductPrice
    // };

    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}