import { Injectable } from '@nestjs/common';
import { BinanceService } from '../binance/binance.service';
import {
  CryptocurrencyAction,
  CryptocurrencyChange,
} from './model/cryptocurrency-change.model';
import { AggregatedTrade } from 'binance-api-node';

@Injectable()
export class CryptocurrencyAnalyzerService {
  constructor(private readonly binanceService: BinanceService) {}

  async analyzePeriod(
    symbol: string,
    dateFrom: Date,
    dateTo: Date,
  ): Promise<CryptocurrencyChange[]> {
    const data = await this.binanceService.historicalMarketData(
      symbol,
      dateFrom,
      dateTo,
    );

    return this.analyzePriceChange(data);
  }

  private analyzePriceChange(data: AggregatedTrade[]): CryptocurrencyChange[] {
    const analyzedData: CryptocurrencyChange[] = [];
    let lastPrice: number = null;

    data
      .sort((a, b) => a.timestamp - b.timestamp)
      .forEach((trade) => {
        const currentPrice = parseFloat(trade.price);

        const cryptocurrencyChange: CryptocurrencyChange = {
          symbol: trade.symbol,
          timestamp: new Date(trade.timestamp),
          price: trade.price,
          action: this.defineAction(lastPrice, currentPrice),
        };
        lastPrice = currentPrice;
        analyzedData.push(cryptocurrencyChange);
      });

    return analyzedData;
  }

  private defineAction(
    lastPrice: number | null,
    currentPrice: number,
  ): CryptocurrencyAction {
    if (lastPrice === null || lastPrice === currentPrice) {
      return 'NO_CHANGE';
    } else if (currentPrice > lastPrice) {
      return 'INCREASE';
    } else if (currentPrice < lastPrice) {
      return 'DECREASE';
    }
  }
}
