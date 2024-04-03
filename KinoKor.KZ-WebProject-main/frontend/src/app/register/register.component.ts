import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // email: string;
  // login: string;
  // password: string;
  // name: string;
  // surname: string;

  constructor() {
  }

  registerFunc(){
    window.alert(`Registration is not available now. Please try again later`);
  }
}
