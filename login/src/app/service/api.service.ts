import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiurl = "http://localhost:3000/api"


   siqnup(data:any):Observable<any>{
    
    return this.http.post(`${this.apiurl}/siqnup`,data);

   }



}
