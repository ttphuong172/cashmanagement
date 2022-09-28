import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient:HttpClient
  ) { }
  findAll(){
    return this.httpClient.get("http://localhost:8080/api/student")
  }
  save(student:any){
    return this.httpClient.post("http://localhost:8080/api/student",student)
  }
  findById(id:any){
    return this.httpClient.get("http://localhost:8080/api/student/"+ id);
  }

  findDTOById(id:any){
    return this.httpClient.get("http://localhost:8080/api/student/dto/" + id)
  }

  update(student:any){
    return this.httpClient.put("http://localhost:8080/api/student/"+ student.id, student)
  }

}
