import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrencyAnalyzerController } from './cryptocurrency-analyzer.controller';

describe('CryptocurrencyAnalyzerController', () => {
  let controller: CryptocurrencyAnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptocurrencyAnalyzerController],
    }).compile();

    controller = module.get<CryptocurrencyAnalyzerController>(CryptocurrencyAnalyzerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
