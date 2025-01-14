import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Example check (replace with API call for real login)
    if (this.email === 'admin@example.com' && this.password === 'password') {
      Swal.fire('Success', 'Login successful!', 'success');
      this.router.navigate(['/tasks']);
    } else {
      Swal.fire('Error', 'Invalid email or password.', 'error');
    }
  }
}
