import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
let url = "https://testvazifa.na4u.ru/"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router,) {
    let token = window.localStorage.getItem("token")

    if(token) {
     this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }
 async logMessage(email:string,password:string,name:string,span:HTMLElement) {
    let response = await fetch(url+"api/register",{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email,
        password,
        name
      })
    })
    const content = await response.json();

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
