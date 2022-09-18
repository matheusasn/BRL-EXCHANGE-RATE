import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { ExchangeApiService } from './services';

import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { CardsComponent } from './components/cards/cards.component';
import { SymbolDirective } from './directives';
import { DataBrPipe } from './pipes';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  declarations: [
    ConverterComponent,
    FooterComponent,
    HeadComponent,
    CardsComponent,
    SymbolDirective,
    DataBrPipe
  ],
  exports: [
    ConverterComponent,
    FooterComponent,
    HeadComponent,
    CardsComponent
  ],
  providers: [
    ExchangeApiService
  ]
})
export class ExchangeRateModule { }
