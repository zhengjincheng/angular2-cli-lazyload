import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-ty-progressbar',
  templateUrl: './ty-progressbar.component.html',
  styleUrls: ['./ty-progressbar.component.css']
})
export class TyProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	   $("#pb").rumOverviewBar();
  }

}
