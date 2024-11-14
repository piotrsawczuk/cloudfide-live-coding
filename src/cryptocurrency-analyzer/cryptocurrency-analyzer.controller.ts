import { Body, Controller, Post } from '@nestjs/common';
import { CryptocurrencyAnalyzerService } from './cryptocurrency-analyzer.service';
import { AnalyzePeriodRequest } from './model/analyze-period.request';
import { CryptocurrencyChange } from './model/cryptocurrency-change.model';

@Controller('cryptocurrency-analyzer')
export class CryptocurrencyAnalyzerController {
  constructor(
    private readonly cryptocurrencyAnalyzerService: CryptocurrencyAnalyzerService,
  ) {}

  @Post()
  async analyzeCryptocurrencyData(
    @Body() request: AnalyzePeriodRequest,
  ): Promise<CryptocurrencyChange[]> {
    const { symbol, dateFrom, dateTo } = request;
    return this.cryptocurrencyAnalyzerService.analyzePeriod(
      symbol,
      new Date(dateFrom),
      new Date(dateTo),
    );
  }
}
