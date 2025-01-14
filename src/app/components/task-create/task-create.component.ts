import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      assignedUser: ['', Validators.required],
      taskName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      Swal.fire({
        title: 'Task Created!',
        text: 'The task has been successfully created.',
        icon: 'success'
      });
      this.taskForm.reset();
    } else {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill out all required fields.',
        icon: 'error'
      });
    }
  }

}
