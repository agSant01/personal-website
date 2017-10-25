import { Injectable } from '@angular/core';

import { LINKS } from './data-types/links'
import { UNIVERSITY } from './data-types/university'
import { EXPERIENCE } from './data-types/experiece'
import { SKILLS } from './data-types/skills'

@Injectable()
export class ConstantsService {
     getResume(): string {
       return "assets/GabrielSantiagoRESUME.pdf";
     }
     getUniversity(): UNIVERSITY[] {
       return [
         {
           name: "University of Puerto Rico at Mayaguez",
           bs: "Bachelor of Science in Computer Engineering",
           graddate: "May 2020",
           courses: [
             'Basic Programming (algorithms)',
             "Advanced Programming (Java, object oriented)",
             "Fundamentals of Computing",
             "Data Structures"
           ],
           gpa: "3.51"
         }
       ];
     }
     getExperience(): EXPERIENCE[] {
       return [
         {
           work: "Richport Solutions Inc.",
           positions: [ "Consultant", "Lead Android Developer" ],
           date: "July 2017 - Present",
           projects: [
             {
               name: "Marketing Uploader System",
               positions: null,
               bullets: [
                      "Involved in the Design of the complete system: front-end & back-end",
                      "Designed database schema",
                      "Webpage design"]
              }
           ]
         },
         {
           work: "Research Experience for Undergraduates - North Carolina State University",
           positions: null,
           date: "Jan 2017 - Present",
           projects: [
             {
               name: "Center for Educational Informatics",
               positions: null,
               bullets: [
                      "Worked on an intelligent tutoring system based on a clustering technique of machine learning",
                      "Researched different methods to improve a clustering mode",
                      "Learned different techniques of unsupervised machine learning"
                    ]
              }
           ]
         },
         {
           work: "APP DEV Team Undergraduate Research",
           positions: [ "Lead Android Developer" ],
           date: "Aug 2016 - Present",
           projects: [
             {
               name: "IAP App Development Team",
               positions: null,
               bullets: [
                      "Voting, registration, and profile managing system",
                      "Involved in designing of the system back-end",
                      "Product & System Development, designed database schema"]
              }
           ]
         },
         {
           work: "Artificial Intelligence Undergraduate Research",
           positions: null,
           date: "Jan 2017 - Present",
           projects: [
             {
               name: null,
               positions: null,
               bullets: [
                      "Learned concepts and variations of machine learning algorithms",
                      "Long term goal is to develop a general purpose ML algorithm"]
              }
           ]
         }
       ];
     }
     getSkills(): SKILLS[] {
       return [
         {
           name: "Android Development",
           group: [
             {
               skill: "SQLite",
               img: "",
               stars: "3"
             },
             {
               skill: "Fabric",
               img: "",
               stars: "3"
             },
             {
               skill: "User Xperience",
               img: "",
               stars: "5"
             },
             {
               skill: "Android Studio",
               img: "",
               stars: "4"
             }
           ]
         },
         {
           name: "Programming Languages",
           group: [
             {
               skill: "Java",
               img: "",
               stars: "4"
             },
             {
               skill: "C",
               img: "",
               stars: "3"
             },
             {
               skill: "TypeScript",
               img: "",
               stars: "3"
             },
             {
               skill: "JavaScript",
               img: "",
               stars: "2.5"
             },
             {
               skill: "SQL",
               img: "",
               stars: "3"
             }
           ]
         },
         {
           name: "Technical",
           group: [
             {
               skill: "Linux/Ubuntu (+2 years)",
               img: "",
               stars: "4"
             },
             {
               skill: "GitHub",
               img: "",
               stars: "5"
             },
             {
               skill: "Terminal",
               img: "",
               stars: "3"
             },
             {
               skill: "Firebase",
               img: "",
               stars: "4.5"
             },
             {
               skill: "Software Design",
               img: "",
               stars: "3.5"
             },
             {
               skill: "Product Development",
               img: "",
               stars: "4"
             },
             {
               skill: "Database Design Concepts",
               img: "",
               stars: "2.5"
             }
           ]
         }
       ];
     }

     getLinks(): LINKS[]{
        return [
          {logo: "assets/PNG/GitHub-Mark-Light-120px-plus.png", link: "https://www.github.com/agSant01", name: "Github"},
          {logo: "assets/In-White-115px-TM.png", link: "https://www.linkedin.com/in/agSant01", name: "LinkedIn"},
          {logo: "assets/ic_file_download_white_48dp_2x.png", link: "assets/GabrielSantiagoRESUME.pdf", name:"Resume"}
        ];
     }

}
