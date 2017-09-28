import { Component, OnInit } from '@angular/core';

import { UNIVERSITY } from '../data-types/university'
import { ConstantsService } from '../constanst.service'

@Component({
  selector: 'education',
  templateUrl: 'education.component.html',
  styleUrls: ['education.component.css']
})

export class EducationComponent implements OnInit {
  university: UNIVERSITY[];
  constructor(private constants: ConstantsService) { }

  ngOnInit() {
    this.university = this.constants.getUniversity();
  }
}
