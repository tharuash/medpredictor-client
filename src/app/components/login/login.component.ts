import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSubscriber: Subscription;
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const user: User = {
      userId : 0,
      username : this.loginForm.value.username,
      password: this.loginForm.value.password,
      email: '',
    };

    this.loginSubscriber =  this.authService.login(user).subscribe(
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
    if (this.loginSubscriber){
      this.loginSubscriber.unsubscribe();
    }
  }
}
