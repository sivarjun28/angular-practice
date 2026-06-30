import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.scss',
})
export class StudentDashboard {
  showStudents: boolean = true;

  students = [
    {
      name: 'arjun',
      marks: 92,
      attendance: 'Excellent',
      isActive: true
    },
    {
      name: 'rahul',
      marks: 52,
      attendance: 'Poor',
      isActive: false
    },
    {
      name: 'siva',
      marks: 42,
      attendance: 'Good',
      isActive: true
    },
    {
      name: 'sivarjun',
      marks: 32,
      attendance: 'excellent',
      isActive: false
    },
    {
      name: 'sumanth',
      marks: 62,
      attendance: 'Good',
      isActive: true
    },
  ]

  toggleStudents() {
    this.showStudents = !this.showStudents;
  }

  getAverageMarks(): number {
    let total = 0;

    for (let student of this.students) {
      total += student.marks;
    }

    return total / this.students.length;
  }
}
