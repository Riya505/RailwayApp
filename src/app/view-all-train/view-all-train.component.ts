import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-train',
  templateUrl: './view-all-train.component.html',
  styleUrls: ['./view-all-train.component.css']
})
export class ViewAllTrainComponent implements OnInit {

  constructor() { }

  name="ria"

  readValues=()=>{
      this.name="raju"
    
  }

  ngOnInit(): void {
  }

}
