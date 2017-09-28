import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdGridListModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponent } from "../landing/landing.component";
import { EducationComponent } from "../education/education.component"
import { ExperienceComponent } from "../experience/experience.component"
import { SkillsComponent } from "../skills/skills.component";
import { ConstantsService } from '../constanst.service'
@NgModule({
  exports: [
    MdGridListModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    MdGridListModule
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
