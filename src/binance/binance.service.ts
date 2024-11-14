import { Injectable } from '@nestjs/common';
import Binance, { Binance as BinanceClient } from 'binance-api-node';

@Injectable()
export class BinanceService {
  private readonly binanceClient: BinanceClient;

  constructor() {
    this.binanceClient = Binance();
  }

  async historicalMarketData(symbol: string, dateFrom: Date, dateTo: Date) {
    return this.binanceClient.aggTrades({
      symbol,
      startTime: dateFrom.getTime(),
      endTime: dateTo.getTime(),
    });
  }
}
