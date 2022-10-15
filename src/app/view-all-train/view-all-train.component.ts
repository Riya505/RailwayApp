import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-train',
  templateUrl: './view-all-train.component.html',
  styleUrls: ['./view-all-train.component.css']
})
export class ViewAllTrainComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewTrain().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
   }

  viewData:any={}

  ngOnInit(): void {
  }

}
