import { Test, TestingModule } from '@nestjs/testing';
import { TakssstatussController } from './takssstatuss.controller';
import { TakssstatussService } from './takssstatuss.service';

describe('TakssstatussController', () => {
  let controller: TakssstatussController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakssstatussController],
      providers: [TakssstatussService],
    }).compile();

    controller = module.get<TakssstatussController>(TakssstatussController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
