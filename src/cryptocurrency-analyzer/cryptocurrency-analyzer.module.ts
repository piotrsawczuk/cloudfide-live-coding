import { Module } from '@nestjs/common';
import { CryptocurrencyAnalyzerService } from './cryptocurrency-analyzer.service';
import { CryptocurrencyAnalyzerController } from './cryptocurrency-analyzer.controller';
import { BinanceModule } from '../binance/binance.module';
import { BinanceService } from '../binance/binance.service';

@Module({
  imports: [BinanceModule],
  providers: [CryptocurrencyAnalyzerService, BinanceService],
  controllers: [CryptocurrencyAnalyzerController],
})
export class CryptocurrencyAnalyzerModule {}
