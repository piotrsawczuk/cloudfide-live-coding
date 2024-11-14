import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from './binance.service';

describe('BinanceService', () => {
  let service: BinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinanceService],
    }).compile();

    service = module.get<BinanceService>(BinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return data', async () => {
    service.historicalMarketData = jest.fn().mockImplementation(() => []);

    expect(
      await service.historicalMarketData(
        'ETHBTC',
        new Date('2024-11-01'),
        new Date('2024-11-14'),
      ),
    ).toEqual([]);
  });
});
