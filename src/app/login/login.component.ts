import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';  // Assurez-vous que le service est correctement importé

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log('Email:', this.email, 'Password:', this.password);
  
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.length > 0) {
          console.log('Login successful:', response[0]);
          this.router.navigate(['/']); // Redirection
        } else {
          console.error('Invalid credentials');
          this.loginError = true; // Affiche une erreur
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.loginError = true; // Affiche une erreur
      }
    );
  }
  
  
}
