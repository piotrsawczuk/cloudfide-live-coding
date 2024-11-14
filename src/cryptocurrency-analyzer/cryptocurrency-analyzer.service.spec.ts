import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrencyAnalyzerService } from './cryptocurrency-analyzer.service';

describe('CryptocurrencyAnalyzerService', () => {
  let service: CryptocurrencyAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptocurrencyAnalyzerService],
    }).compile();

    service = module.get<CryptocurrencyAnalyzerService>(CryptocurrencyAnalyzerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
