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

  it('should return actual data', async () => {
    expect(
      await service.historicalMarketData(
        'ETHBTC',
        new Date('2024-11-01'),
        new Date('2024-11-14'),
      ),
    ).toHaveLength(500); // Default binance length - normally should not use this kind of expect, but it's just for check
  });

  it('should return mocked data', async () => {
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
