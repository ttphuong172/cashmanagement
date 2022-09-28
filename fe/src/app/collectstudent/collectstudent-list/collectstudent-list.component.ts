import { Component, OnInit } from '@angular/core';
import {CollectStudentService} from "../../../service/collectStudent.service";
import {CollectstudentDeleteComponent} from "../collectstudent-delete/collectstudent-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-collectstudent-list',
  templateUrl: './collectstudent-list.component.html',
  styleUrls: ['./collectstudent-list.component.css']
})
export class CollectstudentListComponent implements OnInit {
  collectStudentList:any;
  constructor(
    private collectStudentService:CollectStudentService,
    private matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.collectStudentService.findAll().subscribe(
      (data)=>{
        this.collectStudentList=data;
        console.log(this.collectStudentList)
      }
    )
  }

  openDialogDelete(collectStudentId:any) {
    const dialogRefDelete = this.matDialog.open(CollectstudentDeleteComponent, {
      width: '600px',
      data: collectStudentId,
      disableClose: true
    })
    dialogRefDelete.afterClosed().subscribe(
      ()=>{
          this.ngOnInit();
      }
    )
  }
}
