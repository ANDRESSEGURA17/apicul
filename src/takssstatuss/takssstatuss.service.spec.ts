import { Test, TestingModule } from '@nestjs/testing';
import { TakssstatussService } from './takssstatuss.service';

describe('TakssstatussService', () => {
  let service: TakssstatussService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TakssstatussService],
    }).compile();

    service = module.get<TakssstatussService>(TakssstatussService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
