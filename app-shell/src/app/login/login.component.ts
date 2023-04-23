import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = ''
  password = ''
  constructor(
    private readonly appService: AppService,
    private readonly router: Router,
    ){}

  login() {
    const success = this.appService.login(this.username, this.password)
    if (success) {
      this.router.navigate(['/main'])
    }
  }
}
