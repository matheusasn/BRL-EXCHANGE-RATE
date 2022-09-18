import { Injectable } from '@angular/core';

import { Coin } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  coin: Coin[];

  constructor() { };

  coinObj = [
    {"fromSymbol": "USD", "description": "Dólar australiano"},
    {"fromSymbol": "CAD", "description": "Dólar canadense"},
    {"fromSymbol": "CHF", "description": "Franco Suíço"},
    {"fromSymbol": "CZK", "description": "Coroa República Tcheca"},
  ];

  listAllExchange(): Coin[] {
    if(this.coin){
      return this.coin;
    }

    this.coin = [];

    for (let coinObj of this.coinObj){
      let coin: Coin = new Coin();
      Object.assign(coin, coinObj);
      this.coin.push(coin);
    }

    return this.coin;
  }

}
