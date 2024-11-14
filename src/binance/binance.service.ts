import { Injectable } from '@nestjs/common';
import Binance from 'binance-api-node';

@Injectable()
export class BinanceService {
  constructor(private readonly binance = Binance()) {}

  async historicalMarketData(symbol: string, from: Date, to: Date) {
    return this.binance.aggTrades({
      symbol,
      startTime: from.getTime(),
      endTime: to.getTime(),
    });
  }
}
