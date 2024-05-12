import { Test, TestingModule } from '@nestjs/testing';
import { TakssController } from './takss.controller';
import { TakssService } from './takss.service';

describe('TakssController', () => {
  let controller: TakssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakssController],
      providers: [TakssService],
    }).compile();

    controller = module.get<TakssController>(TakssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
