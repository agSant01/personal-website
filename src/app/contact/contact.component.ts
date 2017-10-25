import { Component, OnInit } from '@angular/core';

import { LINKS } from '../data-types/links'
import { ConstantsService } from '../constanst.service'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  links: LINKS[];

  constructor(private constants: ConstantsService) { }

  ngOnInit() {
      this.links = this.constants.getLinks();
  }

}
