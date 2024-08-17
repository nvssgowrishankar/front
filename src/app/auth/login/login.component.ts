import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.role = params.get('role') || 'customer';
    });
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response && response.role === this.role) {
        this.authService.setCurrentUser(response);
        this.router.navigate([`/${this.role}-dashboard`]);
      } else {
        // Handle authentication error
        alert('Role mismatch or invalid credentials.');
      }
    }, error => {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    });
  }

  navigateToRegister(role: string) {
    this.router.navigate(['/register', { role: role }]);
  }
}
