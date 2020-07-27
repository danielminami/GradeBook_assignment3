import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { Grades } from '../grades';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() student: Student = {
    name: 'Daniel Minami',
    studentNumber: 99102938,
    campus: 'TRA'
  };

  @Input() grades = [
    {
      program: 'Systems Analyst',
      course: 'SYST20948',
      grade: 80
    },
    {
      program: 'Systems Analyst',
      course: 'PROG99471',
      grade: 90
    },
    {
      program: 'Systems Analyst',
      course: 'INFO29384',
      grade: 98
    }
  ];


  ngOnInit(): void {
  }

  average(): string {
    let avg = 0;
    for (let grade of this.grades) {
      avg += grade.grade;
    }
    return (avg / this.grades.length).toFixed(2);
  }

  letterGrade(grade: number): string {
    let letter: string;
    if (grade >= 90) {
      letter = 'A';
    } else if (grade >= 80) {
      letter = 'B';
    } else if (grade >= 70) {
      letter = 'C';
    } else if (grade >= 60) {
      letter = 'D';
    } else {
      letter = 'F';
    }
    return letter;
  }

  percentage(): string {
    let percentage = 0;
    for (let grade of this.grades) {
      percentage += grade.grade;
    }
    return (percentage / this.grades.length).toFixed(0) + "%";
  }

}
