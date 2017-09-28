import { Component, OnInit } from '@angular/core';


import { ConstantsService } from '../constanst.service'

@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css']
})

export class LandingComponent implements OnInit {
  resume: string;
  constructor(private constants: ConstantsService) { }

  ngOnInit() {
    this.resume = this.constants.getResume();
  }

}
