import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-train',
  templateUrl: './view-all-train.component.html',
  styleUrls: ['./view-all-train.component.css']
})
export class ViewAllTrainComponent implements OnInit {

  constructor() { }

  viewData={"ResponseCode":"200","Status":"SUCCESS","Route":[{"SerialNo":"1","StationCode":"DBG","StationName":"DARBHANGA JN","ArrivalTime":"08:35:00","DepartureTime":"08:35:00","Distance":"0"},{"SerialNo":"2","StationCode":"SPJ","StationName":"SAMASTIPUR J","ArrivalTime":"09:25:00","DepartureTime":"09:45:00","Distance":"37"},{"SerialNo":"3","StationCode":"MFP","StationName":"MUZAFFARPUR","ArrivalTime":"10:35:00","DepartureTime":"10:40:00","Distance":"89"},{"SerialNo":"4","StationCode":"HJP","StationName":"HAJIPUR JN.","ArrivalTime":"11:25:00","DepartureTime":"11:28:00","Distance":"142"},{"SerialNo":"5","StationCode":"SEE","StationName":"SONPUR JN.","ArrivalTime":"11:38:00","DepartureTime":"11:40:00","Distance":"148"},{"SerialNo":"6","StationCode":"CPR","StationName":"CHHAPRA JN.","ArrivalTime":"12:45:00","DepartureTime":"12:50:00","Distance":"202"},{"SerialNo":"7","StationCode":"SV","StationName":"SIWAN JN.","ArrivalTime":"13:40:00","DepartureTime":"13:45:00","Distance":"262"},{"SerialNo":"8","StationCode":"GKP","StationName":"GORAKHPUR JN","ArrivalTime":"15:50:00","DepartureTime":"16:05:00","Distance":"380"},{"SerialNo":"9","StationCode":"LKO","StationName":"LUCKNOW JN.","ArrivalTime":"20:55:00","DepartureTime":"21:10:00","Distance":"649"},{"SerialNo":"10","StationCode":"CNB","StationName":"KANPUR CENTR","ArrivalTime":"22:48:00","DepartureTime":"22:58:00","Distance":"722"},{"SerialNo":"11","StationCode":"NDLS","StationName":"NEW DELHI","ArrivalTime":"05:30:00","DepartureTime":"05:30:00","Distance":"1153"}],"Message":null}

  ngOnInit(): void {
  }

}
