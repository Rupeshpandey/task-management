import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      categoryID: [null, Validators.required],
      assignedUserID: [null, Validators.required],
      roleID: [null, Validators.required],
      name: ['', Validators.required],
      description: [''],
      dueDate: ['']
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value).subscribe({
        next: (response) => {
          Swal.fire('Success', 'Task created successfully', 'success');
        },
        error: (error) => {
          Swal.fire('Error', 'Failed to create task', 'error');
        }
      });
    } else {
      Swal.fire('Validation', 'Please fill all required fields', 'warning');
    }
  }

  assignWorkflow(taskId: number, workflowId: number) {
    this.taskService.assignWorkflow(taskId, workflowId).subscribe({
      next: (response) => {
        Swal.fire('Success', 'Workflow assigned successfully', 'success');
      },
      error: (error) => {
        Swal.fire('Error', 'Failed to assign workflow', 'error');
      }
    });
  }

  completeChecklistStep(checklistId: number) {
    this.taskService.completeChecklistStep(checklistId).subscribe({
      next: (response) => {
        Swal.fire('Success', 'Checklist step completed', 'success');
      },
      error: (error) => {
        Swal.fire('Error', 'Failed to complete checklist step', 'error');
      }
    });

  }

}
