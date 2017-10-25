import { Component, OnInit } from '@angular/core';

import { SKILLS } from '../data-types/skills'

import { ConstantsService } from '../constanst.service'

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: SKILLS[];

  constructor(private constants: ConstantsService) { }

  ngOnInit() {
      this.skills = this.constants.getSkills();
  }
}
