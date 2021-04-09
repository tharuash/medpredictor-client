import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerSubscriber: Subscription;
  registerForm = this.formBuilder.group({
    email: '',
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const user: User = {
      userId : 0,
      username : this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
    };

    this.registerSubscriber =  this.authService.register(user).subscribe(
      data => {
        if (data.success) {
          this.router.navigate(['/order']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops..',
            text: data.message,
          });
        }
      },
      error => {
        alert(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.registerSubscriber){
      this.registerSubscriber.unsubscribe();
    }
  }
}
