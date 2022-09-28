import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CollectStudentService} from "../../../service/collectStudent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collectstudent-delete',
  templateUrl: './collectstudent-delete.component.html',
  styleUrls: ['./collectstudent-delete.component.css']
})
export class CollectstudentDeleteComponent implements OnInit {
  collectStudentId:any;
  collectStudent:any;
  constructor(
    private collectStudentService:CollectStudentService,
    private router:Router,
    public dialogRefDelete: MatDialogRef<CollectstudentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.collectStudentId=this.data;
    this.collectStudentService.findById(this.collectStudentId).subscribe(
      (data)=>{
        console.log(data);
        this.collectStudent=data
      }
    )
  }

    closeDialogDelete() {
      this.dialogRefDelete.close()
    }

  delete() {
    this.collectStudentService.delete(this.collectStudentId).subscribe(
      ()=>{
        this.router.navigateByUrl("/student/detail/" + this.collectStudent.student.id);
        this.dialogRefDelete.close()
      }
    )
  }
}
