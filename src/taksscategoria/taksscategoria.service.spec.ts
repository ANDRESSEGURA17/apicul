import { Test, TestingModule } from '@nestjs/testing';
import { TaksscategoriaService } from './taksscategoria.service';

describe('TaksscategoriaService', () => {
  let service: TaksscategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaksscategoriaService],
    }).compile();

    service = module.get<TaksscategoriaService>(TaksscategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
