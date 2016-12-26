import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isExpanded:false;//显示或者隐藏24小时无数据的应用
  isMin:true;
  isDesc:true;
  v_apps=[{id:126935,
          name: "hibaoqiang",
		  //type: 'app',
		  throughput:104.6,
		  responseTimeTotal:1112,
		  apdex:0.34,
		  errorRate: 0.0,
		  hasDataInLast24Hour:true,
		  dataMini: "{\"status\":1,\"score\":94,\"apdex\":0,\"errorPercent\":1,\"responseTime\":0}",
		  language:"JAVA",
		  status:1}];
  constructor() { }

  ngOnInit() {

  }
  toggleBody(){
	
  }
  installNew(){
	
  }
}
