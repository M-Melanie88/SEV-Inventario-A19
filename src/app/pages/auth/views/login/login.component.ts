import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { first, Observable, Subscription } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare function password_show_toggle(): any;

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.showSuccess();
    if (this.authService.token && this.authService.user) {
      setTimeout(() => {
        this.router.navigateByUrl("/dashboard");
      }, 500);
      return;
    }
  }

  callLogin() {
    if (!this.email && !this.password) {
      this.toastr.error("Validación", "Necesitas ingresar todos los campos");
      return;
    }
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      if (response.error && response.error.error == 'Unauthorized') {
        this.toastr.error('Validación', "Las crendenciales son incorrectas");
        return;
      }
      if (response == true) {
        this.toastr.success("Exito", "Bienvenido");
        setTimeout(() => {
          this.router.navigateByUrl("/dashboard");
        }, 500);
      }
    }, (error) => {
      console.log(error);
    })
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
