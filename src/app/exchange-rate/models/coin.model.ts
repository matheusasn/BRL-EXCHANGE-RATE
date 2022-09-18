export class Coin {
  constructor(
    public open?: number,
    public high?: number,
    public low?: number,
    public close?: number,
    public date?: string,
    public diff?: number
  ) {}
}
