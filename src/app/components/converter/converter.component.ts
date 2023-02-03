import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency.interface';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  rates: Currency[] = [];

  firstNum: number = 40;
  secondNum: number = 1;
  selectedFirstOption: number = 1;
  selectedSecondOption: number = 1;
  
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getCurrentCurrency();
    this.convertSecondNum(this.firstNum);
  }

  getCurrentCurrency(): void{
    this.mainService.getCurrentCurrency().subscribe((res) => {
      for (const [key, value] of Object.entries(res.rates)) {
        this.rates.push({symbol: key, currency: value})
      }
    })
  }

  convertFirstNum(event: any): void{
    this.firstNum = (event * this.selectedFirstOption) / this.selectedSecondOption;
  }

  convertSecondNum(event: any): void{
    this.secondNum = (event * this.selectedSecondOption) / this.selectedFirstOption;
  }

  changeValue(): void{
    [this.firstNum, this.secondNum] = [this.secondNum, this.firstNum];
    [this.selectedFirstOption, this.selectedSecondOption] = [this.selectedSecondOption, this.selectedFirstOption]
  }
}
