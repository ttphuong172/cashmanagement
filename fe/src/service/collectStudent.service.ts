import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CollectStudentService {

  constructor(
    private httpClient:HttpClient
  ) { }
  findAll(){
    return this.httpClient.get("http://localhost:8080/api/collectstudent")
  }
  save(collectStudent:any){
    return this.httpClient.post("http://localhost:8080/api/collectstudent",collectStudent)
  }
  findById(id:any){
    return this.httpClient.get("http://localhost:8080/api/collectstudent/" + id)
  }
  update(collectStudent:any){
    return this.httpClient.put("http://localhost:8080/api/collectstudent/" + collectStudent.id, collectStudent)
  }
  delete(id:any){
    return this.httpClient.delete("http://localhost:8080/api/collectstudent/" + id)
  }
}
