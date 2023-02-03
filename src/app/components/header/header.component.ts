import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main-service.service';
import { Currency } from 'src/app/models/currency.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  rates: Currency[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getCurrentCurrency();
  }

  getCurrentCurrency(): void{
    this.mainService.getCurrentCurrency().subscribe((res) => {
      for (const [key, value] of Object.entries(res.rates)) {
        this.rates.push({symbol: key, currency: value})
      }
    })
  }
}
