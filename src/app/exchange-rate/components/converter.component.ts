import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Exchange, ExchangeResponse } from '../models';
import { ExchangeApiService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  converterExchange: Exchange;
  isError: boolean;
  isInvalid: boolean;
  display: boolean;
  exchangeResponse: ExchangeResponse;

  @ViewChild("exchangeForm", { static: true })
  exchangeForm: NgForm;

  constructor(
    private exchangeApiService: ExchangeApiService
  ) { }

  ngOnInit(): void {
    this.init()
  }

  init(): void {
    this.converterExchange = new Exchange('', '');
    this.isError = false;
    this.isInvalid = false;
    this.display = false;
  }

  exchange(): void {
    if(this.exchangeForm.form.valid) {
      this.exchangeApiService
      .getExchangeRate(this.converterExchange)
      .subscribe(
        (response) => {
          this.exchangeResponse = response
          if(response.success){
            this.display = true
            this.isInvalid = false
          }else{
            this.isInvalid = true
            this.display = false
          }
        },
        (error) => {
          this.isError = true
          this.display = false
        }
      );
    }
  }

}
