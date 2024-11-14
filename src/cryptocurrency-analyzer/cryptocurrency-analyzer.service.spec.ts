import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrencyAnalyzerService } from './cryptocurrency-analyzer.service';
import { BinanceModule } from '../binance/binance.module';
import { BinanceService } from '../binance/binance.service';
import { AggregatedTrade } from 'binance-api-node';
import { CryptocurrencyChange } from './model/cryptocurrency-change.model';

describe('CryptocurrencyAnalyzerService', () => {
  let service: CryptocurrencyAnalyzerService;
  let binanceService: BinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BinanceModule],
      providers: [CryptocurrencyAnalyzerService],
    }).compile();

    service = module.get<CryptocurrencyAnalyzerService>(
      CryptocurrencyAnalyzerService,
    );
    binanceService = module.get<BinanceService>(BinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should analyze price', async () => {
    const mockedHistoricalMarketData: AggregatedTrade[] = [
      {
        aggId: 1,
        symbol: 'ETHBTC',
        price: '1000',
        quantity: '100',
        firstId: 1,
        lastId: 1,
        timestamp: 1,
        isBuyerMaker: true,
        wasBestPrice: true,
      },
      {
        aggId: 2,
        symbol: 'ETHBTC',
        price: '2000',
        quantity: '10',
        firstId: 2,
        lastId: 2,
        timestamp: 2,
        isBuyerMaker: true,
        wasBestPrice: true,
      },
    ];

    const expectedResult: CryptocurrencyChange[] = [
      {
        symbol: 'ETHBTC',
        price: '1000',
        timestamp: new Date(1),
        action: 'NO_CHANGE',
      },
      {
        symbol: 'ETHBTC',
        price: '2000',
        timestamp: new Date(2),
        action: 'INCREASE',
      },
    ];

    binanceService.historicalMarketData = jest
      .fn()
      .mockReturnValueOnce(mockedHistoricalMarketData);

    expect(
      await service.analyzePeriod('ETHBTC', new Date(1), new Date(2)),
    ).toEqual(expectedResult);
  });
});
