import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeCard } from '../employee-card/employee-card';
@Component({
  selector: 'app-employee-dashboard',
  imports: [CommonModule, EmployeeCard],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.scss',
})
export class EmployeeDashboard implements OnInit {
  showEmployee = true;

  selectedEmployee = {
    id: 101,
    name: 'Sivarjun',
    department: 'Software Development',
    status: 'Active'
  }
  logs: string[] = [];
  ngOnInit(): void {
    this.addLog('Parent ngOnInit intialized')
  }

  changeEmployee() {
    const employees = [
      {
        id: 102,
        name: 'Priya',
        department: 'QA',
        status: 'Working'
      },

      {
        id: 103,
        name: 'Arjun',
        department: 'HR',
        status: 'Available'
      },

      {
        id: 104,
        name: 'Harsha',
        department: 'SDE',
        status: 'Available'
      }
    ];

    const random = employees[Math.floor(Math.random() * employees.length)]

    this.selectedEmployee = random;


  }

  toggleEmployeeCard() {
    this.showEmployee = !this.showEmployee;

    this.addLog(
      this.showEmployee ? 'Employee card loaded' : 'Employee card destroyed'
    )
  }

  recieveAlert(message: string) {
    console.log('Parent Recieved:', message)


  }

  addLog(message: string) {
    const time = new Date().toLocaleTimeString();

    this.logs.unshift(`[${time}] ${message}`);

  }

  clearLogs(){
    this.logs = [];
  }
}
