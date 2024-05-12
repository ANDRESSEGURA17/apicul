import { Test, TestingModule } from '@nestjs/testing';
import { TaksscategoriaController } from './taksscategoria.controller';
import { TaksscategoriaService } from './taksscategoria.service';

describe('TaksscategoriaController', () => {
  let controller: TaksscategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaksscategoriaController],
      providers: [TaksscategoriaService],
    }).compile();

    controller = module.get<TaksscategoriaController>(TaksscategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
