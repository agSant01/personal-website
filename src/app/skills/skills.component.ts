import { Component, OnInit } from '@angular/core';

import { LINKS } from '../data-types/links'

import { ConstantsService } from '../constanst.service'

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  links: LINKS[];

  constructor(private constants: ConstantsService) { }

  ngOnInit() {
      this.links = this.constants.getLinks();
  }

}
