import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../../service/student.service";
import {CampusService} from "../../../service/campus.service";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  genderList=["Male", "Female", "Other"];
  campusList:any;
  studentForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    campus: new FormControl('')
  })
  constructor(
    private router:Router,
    private campusService:CampusService,
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
    this.campusService.findAll().subscribe(
      (data)=>{
        this.campusList=data;
      }
    )
  }

  cancel() {
    this.router.navigateByUrl("student")
  }

  save() {
    this.studentService.save(this.studentForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl("student")
      }
    )
  }
}
