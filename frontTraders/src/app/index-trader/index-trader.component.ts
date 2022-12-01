import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-index-trader',
  templateUrl: './index-trader.component.html',
  styleUrls: ['./index-trader.component.css']
})
export class IndexTraderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
