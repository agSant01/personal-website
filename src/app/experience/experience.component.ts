import { Component, OnInit } from '@angular/core';

import { EXPERIENCE } from '../data-types/experiece'
import { ConstantsService } from '../constanst.service'

@Component({
  selector: 'experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})

export class ExperienceComponent implements OnInit {
  experiences: EXPERIENCE[]
  constructor(private constants: ConstantsService) { }

  ngOnInit() {
    this.experiences = this.constants.getExperience();
  }
}
