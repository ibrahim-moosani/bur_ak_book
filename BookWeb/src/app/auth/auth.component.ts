import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthServiceService
  ) { }

  weatherforecastData: any[] = [];

  ngOnInit(): void {
    this.weatherforecast();
  }

  weatherforecast(){
    this.auth.weatherforecast().subscribe(res => {
      this.weatherforecastData = res;
      debugger
    })
  }

}
