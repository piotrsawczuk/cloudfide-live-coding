import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceModule } from './binance/binance.module';
import { CryptocurrencyAnalyzerModule } from './cryptocurrency-analyzer/cryptocurrency-analyzer.module';

@Module({
  imports: [BinanceModule, CryptocurrencyAnalyzerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
