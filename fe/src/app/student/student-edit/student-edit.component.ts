import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../service/student.service";
import {CampusService} from "../../../service/campus.service";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  genderList=["Male", "Female","Other"]
  studentForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    campus: new FormControl('')
  })
  campusList: any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private studentService:StudentService,
    private campusService:CampusService,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.studentService.findById(id).subscribe(
      (data)=>{
        console.log(data)
        this.studentForm.setValue(data);
        this.campusService.findAll().subscribe(
          (data)=>{
            this.campusList=data;
            console.log(data)
          }
        )
      }
    )
  }

  compareByID(obj1: any, obj2: any) {
    return obj1 && obj2 && obj1.id == obj2.id
  }

  cancel() {
    this.router.navigateByUrl("student")
  }

  update() {
    this.studentService.update(this.studentForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl("student")
      }
    )
  }
}
