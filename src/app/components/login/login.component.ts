import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService) { }

  ngOnInit(): void {
  }

  isLoading:boolean=false;

  loginForm: FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  });

  formData(x:FormGroup){
    this.isLoading=true;
    this._AuthService.login(x.value).subscribe({
      next:(response)=>{
        if(response.message=='success'){
          localStorage.setItem('userToken',response.token);
          this._AuthService.saveData();
          this._Router.navigate(['/home']);
        }else{
          this._ToastrService.error(response.message,'Error');
        }
        this.isLoading=false;
      }
    })
  }
}
