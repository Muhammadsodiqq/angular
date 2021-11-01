import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
let url = "http://localhost:8000/api"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    let token = window.localStorage.getItem("token")

    if(token) {
     this.router.navigateByUrl('/');
    }
   }

  ngOnInit(): void {
  }
  async logMessage(email:string,password:string,span:HTMLElement) {
    let response = await fetch(url+"/login",{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email,
        password,
      })
    })
    const content = await response.json();
    console.log(content);

    if(!content.ok){
      span.style.display = 'block'
      span.innerText = content.message
    }else {
      span.style.display = 'none'
      window.localStorage.setItem("token", content.token);
      this.router.navigateByUrl('/');
    }
  }
}
