import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder)
  private authService = inject( AuthService )
  private router = inject( Router )

  public myForm: FormGroup = this.fb.group({
    email: ['alex001@gmail.com', [Validators.required, Validators.email]],
    password: ['123457', [Validators.required, Validators.minLength(6)]],
  })

  login() {
    console.log( this.myForm.value )
    const { email, password } = this.myForm.value
    this.authService.login( email, password )
      .subscribe({
        next: data => this.router.navigateByUrl('/dashboard'),
        error: error => {
          Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          // console.log({ error })
        },
      })
  }

}
