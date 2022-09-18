import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ExchangeResponse, Exchange, Coin } from '../../models';
import { ExchangeApiService } from '../../services';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() id: string;
  @Input() exchangeResponse: ExchangeResponse;
  @Input() exchange: Exchange;
  @Input() display: boolean;
  @Output() exchangeLast: EventEmitter<any> = new EventEmitter<any>();

  converterExchange: Exchange;
  coinResponse: Coin[] | undefined;
  isError: boolean;
  closeDiff: number;

  constructor( private exchangeApiService: ExchangeApiService ) { }

  ngOnInit(): void {
  }

  get getDataExchange(): string {
    let response = this.exchangeApiService.getDataExchange(
      this.exchangeResponse
    );
    return response
  }

  get getSymbolExchange(): string {
    return this.exchangeApiService.getSymbolExchange(
      this.exchangeResponse
    );
  }

  get getExchangeRateDay(): string {
    let coin = this.exchangeApiService.getExchangeRateDay(
      this.exchangeResponse
    ).toFixed(2);

    const coinBr = coin.split('.')

    return coinBr[0] + ',' + coinBr[1]
  }

  getListExchangeRate(): void {
    this.exchangeApiService
    .getDailyExchangeRate(this.exchangeResponse)
    .subscribe(
      (response) => {
        this.coinResponse = response.data.slice(0,30);
          if(this.coinResponse.length > 0){
            this.coinResponse.forEach((value, idx, arrCoin)=> {
              this.closeDiff = value.close - arrCoin[idx+1].close
              if(this.closeDiff > 0){
                this.closeDiff = ((value.close - arrCoin[idx+1].close) / arrCoin[idx+1].close) * 100
              }else if (this.closeDiff < 0){
                this.closeDiff = ((arrCoin[idx+1].close - value.close) / value.close) * -100
              } else {
                this.closeDiff = 0;
              }
              value.diff = Number(this.closeDiff);
            })
          }
      },
      (error) => this.isError = true
    );
  }

}
