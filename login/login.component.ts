import { Component, OnInit } from '@angular/core';
import {Model} from '../model';
import {MyService} from '../service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 message: string;
  jsontest:any;
  constructor(private jsonService : MyService,public authService: AuthService, private router: Router){

  }
  ngOnInit(){
    this.jsonService.getjso()
        .subscribe(
            jsontest => {this.jsontest = jsontest;
              console.log(jsontest);}

        )

  }


	model=new Model('','');

	loginsuccess(){

		



		if(this.jsontest.name===this.model.uname && this.jsontest.pwd===this.model.pwd )
		{
				console.log("success logged in");
				

				this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        console.log(this.authService.redirectUrl);
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/resume';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
    	//this.router.navigate(['/resume']);
			
		}
		else {
			alert('incorrect username or password')
		}
		

		




	}

	eventHandler(event:any){
		
		if(event.key==="Enter"){
			this.loginsuccess();
		}
	}

	signin(){
		
		
		this.loginsuccess();
	}



}
