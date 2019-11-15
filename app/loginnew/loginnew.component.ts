import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-loginnew',
  templateUrl: './loginnew.component.html',
  styleUrls: ['./loginnew.component.css']
})
export class LoginnewComponent implements OnInit {

  email:String;
  password:String;
  constructor(private us:UsersService) { }

  ngOnInit() {
  }
  signIn(){
    this.us.signIn(this.email,this.password);
  }

}
