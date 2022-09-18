import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Exchange, ExchangeResponse, Coin } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiService {

  private readonly BASE_URL = "https://api-brl-exchange.actionlabs.com.br/api/1.0";

  constructor(private http: HttpClient) { }

  getExchangeRate(exchange: Exchange): Observable<any>{
    let params = `/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${exchange.symbol}&to_symbol=BRL`;

    return this.http
      .get(this.BASE_URL + params);
  }

  getDailyExchangeRate(exchangeResponse: ExchangeResponse): Observable<any> {
    let params = `/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${exchangeResponse.fromSymbol}&to_symbol=BRL`;

    return this.http
      .get(this.BASE_URL + params)
  }

  getDataExchange(exchangeResponse: ExchangeResponse): string{
    if (exchangeResponse === undefined) {
      return '';
    }

    return exchangeResponse.lastUpdatedAt;
  }

  getSymbolExchange(exchangeResponse: ExchangeResponse): string{
    if (exchangeResponse === undefined) {
      return '';
    }

    return exchangeResponse.fromSymbol;
  }

  getExchangeRateDay(exchangeResponse: ExchangeResponse): any{
    if (exchangeResponse === undefined) {
      return '';
    }

    return exchangeResponse.exchangeRate;
  }

  // getListExchangeRate(coinResponse: Coin, exchange: Exchange): any {
  //   if (coinResponse === undefined) {
  //     return '';
  //   }else if (exchange === undefined){
  //     return ''
  //   }

  //   this.getDailyExchangeRate(exchange)
  //   .subscribe(
  //     (response) => {
  //       coinResponse = response.data.slice(0,29);
  //       console.log(coinResponse)
  //     },
  //     (error) => error
  //   )

  //   return coinResponse;
  // }
}
