import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RegitrationForm } from "src/app/modal/registeration/RegistrationForm";
import { RegisterFormService } from "src/app/service/register/registerForm.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent{

  constructor(private _registerFormService:RegisterFormService,private router: Router) {
  }

  register:RegitrationForm={};

  onSave():void{
    console.log(this.register);
    this.router.navigate(['/thankyou']);
    this._registerFormService.saveRegistrationForm(this.register).subscribe(
      res => {
          console.log(res);
      },
    );

  }

};
