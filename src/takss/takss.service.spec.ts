import { Test, TestingModule } from '@nestjs/testing';
import { TakssService } from './takss.service';

describe('TakssService', () => {
  let service: TakssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TakssService],
    }).compile();

    service = module.get<TakssService>(TakssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
