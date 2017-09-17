import { Injectable } from '@angular/core';

import { LINKS } from './data-types/links'

@Injectable()
export class ConstantsService {

     getLinks(): LINKS[]{
        return [
          {logo: "../assets/PNG/GitHub-Mark-Light-120px-plus.png", link: "https://www.github.com/agSant01", name: "Github"},
          {logo: "../assets/In-White-115px-TM.png", link: "https://www.linkedin.com/in/agSant01", name: "LinkedIn"},
          {logo: "../assets/ic_file_download_white_48dp_2x.png", link: "../assets/GabrielSantiagoRESUME.pdf", name:"Resume"}
        ];
     }
}
