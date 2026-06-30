import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TagModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  providers: [MessageService],
})
export class Table {
  selectedEmployee: any;

  employees = [
    {
      id: 1,
      name: 'John Smith',
      department: 'IT',
      designation: 'Angular Developer',
      salary: 75000,
      status: 'Active',
      email: 'john@company.com'
    },
    {
      id: 2,
      name: 'David Miller',
      department: 'HR',
      designation: 'HR Manager',
      salary: 65000,
      status: 'Inactive',
      email: 'david@company.com'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      department: 'Finance',
      designation: 'Accountant',
      salary: 70000,
      status: 'Active',
      email: 'sarah@company.com'
    },
    {
      id: 4,
      name: 'Michael Brown',
      department: 'Marketing',
      designation: 'Marketing Lead',
      salary: 80000,
      status: 'Pending',
      email: 'michael@company.com'
    },
    {
      id: 5,
      name: 'Emma Wilson',
      department: 'IT',
      designation: '.NET Developer',
      salary: 90000,
      status: 'Active',
      email: 'emma@company.com'
    }
  ];

  constructor(private messageService: MessageService) {

  }

  getSeverity(status: string) {
    switch (status) {
      case 'Active':
        return 'success';

      case 'Inactive':
        return 'danger';

      default: return 'warn';
    }
  }

  onEdit(employee: any){
      this.messageService.add({
        severity: 'info',
        summary: 'Edit',
        detail: `Editing ${employee.name}`
      });
  }

  onDelete(employee: any){
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: `Deleting ${employee.name}`
    })
  }
}
