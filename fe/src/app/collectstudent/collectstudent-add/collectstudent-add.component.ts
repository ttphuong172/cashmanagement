import {Component, OnInit} from '@angular/core';
import {ScholasticService} from "../../../service/scholastic.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {RevenueService} from "../../../service/revenue.service";
import {StudentService} from "../../../service/student.service";
import {CollectStudentService} from "../../../service/collectStudent.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-collectstudent-create',
  templateUrl: './collectstudent-add.component.html',
  styleUrls: ['./collectstudent-add.component.css']
})
export class CollectstudentAddComponent implements OnInit {
  collectStudentForm: FormGroup | any;
  scholasticList: any;
  revenueList: any;
  currencyList=["VND","USD"];
  student:any;

  constructor(
    private formBuilder: FormBuilder,
    private scholasticService: ScholasticService,
    private revenueService: RevenueService,
    private studentService:StudentService,
    private collectStudentService:CollectStudentService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));


    this.collectStudentForm = new FormGroup({
      student: new FormControl(''),
      collectDay: new FormControl(''),
      scholastic: new FormControl(''),
      collectList: this.formBuilder.array([])
    })


    this.scholasticService.findAll().subscribe(
      (data) => {
        this.scholasticList = data;
        console.log(this.scholasticList)
        this.revenueService.findAll().subscribe(
          (data) => {
            this.revenueList = data;
            console.log(this.revenueList)
            this.studentService.findById(id).subscribe(
              (data)=>{
                this.student=data;
                this.collectStudentForm.controls['student'].setValue(data);
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

  removeCollect(i: number) {
    this.collect.removeAt(i);
  }

  cancel() {
    this.router.navigateByUrl("/student/detail/" + this.student.id);
  }

  save() {
    this.collectStudentService.save(this.collectStudentForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl("/student/detail/" + this.student.id);
      }
    )
  }
}
