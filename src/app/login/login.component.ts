import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username = '';
 password = '';

  constructor(private http:HttpClient  ) {}


  data: any = null ;                                                                                                            
  getData(){
   this.http.get('https://random-data-api.com/api/coffee/random_coffee?size=50')
   .subscribe((data)=>{
    
   this.data = data
 })
}
//  onSubmit() {
//   this.router.navigate(['../product']);

// }
 ngOnInit() {

 }
  

 
}
