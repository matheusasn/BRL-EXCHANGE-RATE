export class ExchangeResponse {
  constructor(
    public base: string,
    public lastUpdatedAt: string,
    public fromSymbol: string,
    public exchangeRate: any
  ){}
}
