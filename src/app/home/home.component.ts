import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

   let token = window.localStorage.getItem("token")

   if(!token) {
    this.router.navigateByUrl('/login');
   }

  }

  ngOnInit(): void {
  }

  DeleteToken(){
    window.localStorage.removeItem("token")
    this.router.navigateByUrl('/login');
  }
}
