import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]+$/)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]+$/)]),
    age: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(90)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_=\+]).+$/)])
  });

  equal:boolean=false;
  someValue:any;
  error:string='';
  isLoading:boolean=false;

  checkPassword(){
    if(this.registerForm.get('password')?.value == this.someValue){
      this.equal=true;
    }else{
      this.equal=false;
    }
  }

  formData(x: FormGroup) {
    this.isLoading=true;
    this._AuthService.register(x.value).subscribe({
      next:(response)=>{
        if(response.message=='success'){
          this._ToastrService.success('Account has been created successfully');
          this._Router.navigate(['/login']);
        }
        else{
          this._ToastrService.error(response.message,'Error');
        }
        this.isLoading=false;
      }
    })
  }

}
