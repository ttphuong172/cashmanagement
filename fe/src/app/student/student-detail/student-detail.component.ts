import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ActivatedRoute} from "@angular/router";
import {CollectstudentDeleteComponent} from "../../collectstudent/collectstudent-delete/collectstudent-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: any;
  scholasticSet = new Set();
  collectStudentMap=new Map;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(id)
    this.studentService.findDTOById(id).subscribe(
      (data) => {
        // console.log(data)
        this.student = data;
        this.getscholasticSet();
        this.getCollectByScholastic();
      }
    )
  }

  openDialogDelete(collectStudentId: any) {
    const dialogRefDelete = this.matDialog.open(CollectstudentDeleteComponent, {
      width: '600px',
      data: collectStudentId,
      disableClose: true
    })
    dialogRefDelete.afterClosed().subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }

  getscholasticSet() {
    for (let collectStudent of this.student.collectStudentList) {
      let scholastic = collectStudent.scholastic.name;
      // console.log(scholastic)
      this.scholasticSet.add(scholastic)
    }
    // console.log(this.scholasticSet)
    for (const scholastic of this.scholasticSet.values()) {
      // console.log(scholastic)
    }

  }

  getCollectByScholastic() {
    for (const scholastic of this.scholasticSet.values()) {
      let collectList = [];
      for (let i = 0; i < this.student.collectStudentList.length; i++) {
        if (scholastic == this.student.collectStudentList[i].scholastic.name) {
          for (let j = 0; j < this.student.collectStudentList[i].collectList.length; j++) {
            collectList.push(this.student.collectStudentList[i].collectList[j])
          }
        }
      }
      // console.log(scholastic)
      // console.log(collectList)
      let revenueSet=new Set();
      let collectMap=new Map;
      for (let collect of collectList){
          let revenue=collect.revenue.name;
          revenueSet.add(revenue)

      }
      // console.log(revenueSet)
      for (const revenue of revenueSet.values()){
        // console.log(revenue)
        let sum=0;
        for (let i =0;i< collectList.length;i++){
          if (revenue==collectList[i].revenue.name){
            sum+=collectList[i].amount;
          }
        }
        // console.log(sum);
        collectMap.set(revenue,sum)
      }
      // console.log(collectMap)
      //Convert Map to String
      let collect = "";
      collectMap.forEach (function(value, key) {
        collect += key + ' = ' + value + ","
      })
      // console.log(collect);
      this.collectStudentMap.set(scholastic,collect);
    }
    console.log(this.collectStudentMap)
  }

}
