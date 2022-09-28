import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CollectStudentService} from "../../../service/collectStudent.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../../service/student.service";
import {ScholasticService} from "../../../service/scholastic.service";
import {RevenueService} from "../../../service/revenue.service";

@Component({
  selector: 'app-collectstudent-edit',
  templateUrl: './collectstudent-edit.component.html',
  styleUrls: ['./collectstudent-edit.component.css']
})
export class CollectstudentEditComponent implements OnInit {
  collectStudentForm: FormGroup | any;
  student:any;
  scholasticList: any;
  revenueList: any;
  currencyList=["VND","USD"]
  collectStudent: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private collectStudentService:CollectStudentService,
    private studentService:StudentService,
    private scholasticService:ScholasticService,
    private revenueService:RevenueService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.collectStudentForm = new FormGroup({
      id: new FormControl(''),
      student: new FormControl(''),
      collectDay: new FormControl(''),
      scholastic: new FormControl(''),
      collectList: this.formBuilder.array([])
    })

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id)
    this.collectStudentService.findById(id).subscribe(
      (data)=>{
        console.log(data)
        this.collectStudent=data
        this.student=this.collectStudent.student;
        // this.collectStudentForm.setValue(data)
        this.collectStudentForm.controls['id'].setValue(this.collectStudent.id)
        this.collectStudentForm.controls['student'].setValue(this.collectStudent.student)
        this.collectStudentForm.controls['collectDay'].setValue(this.collectStudent.collectDay)
        this.collectStudentForm.controls['scholastic'].setValue(this.collectStudent.scholastic)
        for (let i = 0; i < this.collectStudent.collectList.length; i++) {
          this.collectStudentForm.controls['collectList'].push(this.setCollect(this.collectStudent.collectList[i].revenue, this.collectStudent.collectList[i].amount, this.collectStudent.collectList[i].currency))
        }

        this.scholasticService.findAll().subscribe(
          (data)=>{
            this.scholasticList=data;
            this.revenueService.findAll().subscribe(
              (data)=>{
                this.revenueList=data;
              }
            )
          }
        )
      }
    )
  }
  searchStudent($event: any) {
    let studentId = $event.target.value;
    console.log(studentId);
    this.studentService.findById(studentId).subscribe(
      (data)=>{
        this.student=data
        this.collectStudentForm.controls['student'].setValue(data);
      }
    )
  }

  get collect(): FormArray {
    return this.collectStudentForm.get('collectList') as FormArray;
  }

  removeCollect(i: number) {
    this.collect.removeAt(i);
  }


  setCollect(revenue: any,amount:any,currency:any): FormGroup {
    return this.formBuilder.group({
      revenue: revenue || '',
      amount:amount || '',
      currency:currency || ''
    })
  }

  addCollect() {
    this.collect.push(this.setCollect(null,null,null));
  }

  compareByID(obj1: any, obj2: any) {
    return obj1 && obj2 && obj1.id == obj2.id
  }

  cancel() {
    this.router.navigateByUrl("/student/detail/" + this.collectStudent.student.id)
  }

  update() {
      this.collectStudentService.update(this.collectStudentForm.value).subscribe(
        ()=>{
          this.router.navigateByUrl("/student/detail/" + this.collectStudent.student.id)
        }
      )
  }
}
