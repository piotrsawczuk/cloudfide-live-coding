import { Module } from '@nestjs/common';
import { CryptocurrencyAnalyzerService } from './cryptocurrency-analyzer.service';
import { CryptocurrencyAnalyzerController } from './cryptocurrency-analyzer.controller';
import { BinanceModule } from '../binance/binance.module';

@Module({
  imports: [BinanceModule],
  providers: [CryptocurrencyAnalyzerService],
  controllers: [CryptocurrencyAnalyzerController],
})
export class CryptocurrencyAnalyzerModule {}
